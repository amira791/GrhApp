package com.cnrc.grh;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*"); // Autorise toutes les origines. Vous pouvez limiter cela à des origines spécifiques.
        config.addAllowedMethod("*"); // Autorise toutes les méthodes HTTP.
        config.addAllowedHeader("*"); // Autorise tous les en-têtes HTTP.
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
