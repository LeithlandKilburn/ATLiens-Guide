package learn.atliens.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import learn.atliens.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtConverter {

    private Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private final String ISSUER = "atliens";
    private final int EXPIRATION_MINUTES = 60 * 24;
    private final int EXPIRATION_MILLIS = EXPIRATION_MINUTES * 60 * 1000;

    public String getTokenFromUser(User user) {

        String authorities = user.getAuthorities().stream()
                .map(i -> i.getAuthority())
                .collect(Collectors.joining(","));

        return Jwts.builder()
                .setIssuer(ISSUER)
                .setSubject(user.getUsername())
                .claim("user_id", user.getUserId())
                .claim("authorities", authorities)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_MILLIS))
                .signWith(key)
                .compact();
    }

    public User getUserFromToken(String token) {

        if (token == null || !token.startsWith("Bearer ")) {
            return null;
        }

        try {
            Jws<Claims> jws = Jwts.parserBuilder()
                    .requireIssuer(ISSUER)
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.substring(7));

            String username = jws.getBody().getSubject();
            String userId = (String)jws.getBody().get("user_id");
            String authStr = (String)jws.getBody().get("authorities");

            User newUser = new User();
            newUser.setUsername(username);
            newUser.setUserId(userId);
            newUser.setAuthorities(mapAuthorities(Arrays.asList(authStr.split(","))));
            newUser.setEnabled(true);
            return newUser;

        } catch (JwtException e) {
            System.out.println(e);
        }

        return null;
    }

    public List<SimpleGrantedAuthority> mapAuthorities(List<String> auths) {
        return auths.stream()
                .map(r -> new SimpleGrantedAuthority(r))
                .collect(Collectors.toList());
    }
}