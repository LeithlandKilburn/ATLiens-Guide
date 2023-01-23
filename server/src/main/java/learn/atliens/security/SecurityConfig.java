package learn.atliens.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity(debug = true)
@Configuration
public class SecurityConfig {
    private final JwtConverter converter;
    // SecurityFilterChain allows configuring
    // web based security for specific http requests.


    public SecurityConfig(JwtConverter converter) {
        this.converter = converter;
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authConfig) throws Exception {
        // we're not using HTML forms in our app
        //so disable CSRF (Cross Site Request Forgery)
        http.csrf().disable();

        // this configures Spring Security to allow
        //CORS related requests (such as preflight checks)
        http.cors();

        // the order of the antMatchers() method calls is important
        // as they're evaluated in the order that they're added
        http.authorizeRequests()
                .antMatchers(HttpMethod.GET,
                        "/atliens/user/*").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/user").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/authenticate").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/user/create_account").permitAll()
                .antMatchers(HttpMethod.GET,
                        "/atliens/word/*").permitAll()
                .antMatchers(HttpMethod.POST,
        "/atliens/word").permitAll() // TODO: change back to admin only later
                .antMatchers(HttpMethod.PUT,
                        "/atliens/word/*").permitAll() // TODO: change back to admin only later
                .antMatchers(HttpMethod.DELETE,
                        "/atliens/word/*").permitAll() // TODO: change back to admin only later
//                .hasAnyAuthority( "ADMIN")
                // if we get to this point, let's deny all requests
                .antMatchers("/**").denyAll()
                .and()
                .addFilter(new JwtRequestFilter(authenticationManager(authConfig), converter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}