package learn.atliens.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    // SecurityFilterChain allows configuring
    // web based security for specific http requests.

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
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
                        "/atliens/user").permitAll()
                .antMatchers(HttpMethod.GET,
                        "/atliens/user/*").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/user").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/authenticate").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/user/create_account").permitAll()
                .antMatchers(HttpMethod.GET,
                        "/atliens/word").permitAll()
                .antMatchers(HttpMethod.GET,
                        "/atliens/word/*").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/atliens/word").hasAnyAuthority( "ADMIN")
                // if we get to this point, let's deny all requests
                .antMatchers("/**").denyAll()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}