package football.news.config


object EnvConfig {
    fun get(key: String): String {
        return System.getenv(key)
            ?: throw IllegalArgumentException("Missing env: $key")
    }
}