//  # server manzili, faqat domenni kiriting, oxirida / ishlatmang
const PLATON_SERVER_URL = "https://api.online-mahalla.uz"

// # Sayt nomi, branding uchun
const PLATON_APP_NAME = "online-mahalla.uz"

const PLATON_APP_TITLE = "online-mahalla.uz"

const PLATON_SHORT_NAME = "online-mahalla.uz"

// # server manzili uchun, agar proxy yoki subfolder ishlatilingan bo'lsa sozlash kerak qolgan vaqt /
// # / bilan boshlanmasligi va tugamasligi kerak, misol uchun platon-api
const PLATON_SERVER_PREFIX = ""

const PLATON_LOGIN_PROVIDER = "default,eimzo"

// # login url; server url + login_url
// # / dan boshlanmasligi kerak
const PLATON_LOGIN_URL = "auth/login"

const PLATON_APP_LANGS = "uz,ru,la"

const PLATON_CHANGE_PASSWORD_DISABLED = true
const PLATON_OTP_DISABLED = false
const PLATON_EIMZO_DISABLED = true

// # api url; server url + api_url
// # / dan boshlanmasligi yoki tugamasligi kerak
const PLATON_API_URL = "web/v1"

const PLATON_API_SUFFIX = ""

const PLATON_CONTACT_PHONE = ""
const PLATON_CONTACT_TELEGRAM = ""

const PLATON_DEFAULT_LANG = "uz"
const PLATON_COPYRIGHT_URL = ""

const PLATON_AUDIT_LINK = ""

const PLATON_ROUTER_BASE_URL = "/"

const PLATON_LOGIN_PAGE = "/login"

// # PLATON_EIMZO_CLIENT: tunnel | direct
const PLATON_EIMZO_CLIENT = ""
// # E-IMZO uchun api key DOMAIN;key ko'rinishida
// # Example (invalid key):
// # PLATON_EIMZO_KEY=platon.uz;96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B
const PLATON_EIMZO_KEY = ""

const PLATON_HOME_REDIRECT = ""

// Platon default layoutining statusi (BOOLEAN)
const PLATON_NOLAYOUT = false

PLATON_ENABLE_SENTRY = false
//PLATON_SENTRY_DNS : https://aa02e8a1d57c4911a4a511bf1b7199ae@sentry.platon.uz/38
PLATON_SENTRY_DNS = ""

window.configs = {
	PLATON_LOGIN_URL,
	PLATON_API_URL,
	PLATON_SERVER_URL,
	PLATON_APP_NAME,
	PLATON_APP_TITLE,
	PLATON_SHORT_NAME,
	PLATON_SERVER_PREFIX,
	PLATON_LOGIN_PROVIDER,
	PLATON_APP_LANGS,
	PLATON_OTP_DISABLED,
	PLATON_EIMZO_DISABLED,
	PLATON_CHANGE_PASSWORD_DISABLED,
	PLATON_API_SUFFIX,
	PLATON_CONTACT_PHONE,
	PLATON_CONTACT_TELEGRAM,
	PLATON_DEFAULT_LANG,
	PLATON_COPYRIGHT_URL,
	PLATON_AUDIT_LINK,
	PLATON_ROUTER_BASE_URL,
	PLATON_LOGIN_PAGE,
	PLATON_EIMZO_KEY,
	PLATON_EIMZO_CLIENT,
	PLATON_HOME_REDIRECT,
	PLATON_ENABLE_SENTRY,
	PLATON_SENTRY_DNS,
	PLATON_NOLAYOUT
}
