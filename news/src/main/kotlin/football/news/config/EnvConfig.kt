package football.news.config

import io.github.cdimascio.dotenv.Dotenv

object EnvConfig {

    private val dotenv = Dotenv.load()

    fun get(key: String): String {
        return dotenv[key]
    }
}