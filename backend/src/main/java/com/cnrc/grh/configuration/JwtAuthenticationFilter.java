package com.cnrc.grh.configuration;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    private final UserDetailsService userDetailsService ;


    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {

     final String authHeader = request.getHeader("Authorization");
     final String jwt;
     final String username;
    if(authHeader == null || !authHeader.startsWith("Bearer ")){
     filterChain.doFilter(request,response);
     return;
    }
    jwt =authHeader.substring(7);

    username = jwtService.extractUsername(jwt) ;
    // check if the username is set and is not authenticated yet
        // if it is authenticated just pass the validation process
    if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){


        UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
        if(jwtService.isTokenValid(jwt , userDetails)){
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    userDetails ,
                    null,
                    userDetails.getAuthorities()
            );
            authToken.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request)
            );
            //update security context holder

            SecurityContextHolder.getContext().setAuthentication(authToken);

        }

    }
    filterChain.doFilter(request,response);
    }
}
