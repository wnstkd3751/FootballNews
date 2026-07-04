package football.news.config

import io.github.cdimascio.dotenv.Dotenv

object EnvConfig {

    private val dotenv = Dotenv.configure()
        .ignoreIfMissing()
        .load()

    fun get(key: String): String {
        return dotenv[key]
            ?: throw IllegalArgumentException("Missing env: $key")
    }
}