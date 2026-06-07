package football.news.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.reactive.CorsWebFilter
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource

@Configuration
class CorsConfig {

    @Bean
    fun corsWebFilter(): CorsWebFilter {

        val config = CorsConfiguration()

        config.allowedOriginPatterns =
            listOf("*")

        config.allowedMethods =
            listOf("*")

        config.allowedHeaders =
            listOf("*")

        config.allowCredentials = false

        val source =
            UrlBasedCorsConfigurationSource()

        source.registerCorsConfiguration(
            "/**",
            config
        )

        return CorsWebFilter(source)
    }
}