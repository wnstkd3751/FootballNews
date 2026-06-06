package football.news.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class CorsConfig {

    @Bean
    fun corsWebFilter(): CorsWebFilter {

        val config =
            CorsConfiguration()

        config.allowedOrigins =
            listOf(
                "http://localhost:5173"
            )

        config.allowedMethods =
            listOf("*")

        config.allowedHeaders =
            listOf("*")

        val source =
            UrlBasedCorsConfigurationSource()

        source.registerCorsConfiguration(
            "/**",
            config
        )

        return CorsWebFilter(source)
    }
}