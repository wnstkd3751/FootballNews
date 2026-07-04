package football.news.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.reactive.function.client.WebClient

@Configuration
class WebClientConfig {

    @Bean
    fun xWebClient(): WebClient {

        return WebClient.builder()
            .baseUrl("https://api.x.com/2")
            .defaultHeader(
                "Authorization",
                "Bearer ${EnvConfig.get("X_BEARER_TOKEN")}"
            )
            .build()
    }
    @Bean
    fun openAiWebClient(): WebClient {

        return WebClient.builder()
            .baseUrl("https://api.openai.com/v1")
            .build()
    }
}

