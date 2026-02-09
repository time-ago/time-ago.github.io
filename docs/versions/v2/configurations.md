---
outline: deep
search: false
title: Configurations - v2
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

# Configurations
We can set library configurations with the `SetConfig` function that accepts a `Config` structure.

## Language
Optionally, you can set the language in your application.

> Default value is `"en"`

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
        Language: "ru",
    })
}
```

:::tip Supported languages
You can find the full list of supported languages in the [What is Timeago?](/v2/what-is-timeago.html#supported-languages) section.
:::

## Location
Optionally, you can set the location in your application. The functionality will be the same, but with one exception: in the absence of time zone information, the library interprets a time as UTC; with location configuration, it interprets the time as in the given location.

:::warning
There is no default value for this option.
:::

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
        Location: "Europe/Kiev",
    })
}
```

:::tip Set Location
Please make sure that timezone configuration is correct for your location. It is very important for displaying the correct datetime.
:::

## Overrides translations
There are cases when you want to replace certain words with specific ones. For example, you might want to replace "days" with "d" to get "4 d ago". You can do this by setting specific configurations for each language. Let's see an example where we want to override words for the English language:

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
		Translations: []timeago.Translation{
			{
				Language: "en",
				Translations: map[string]string{
					"days":  "d",
					"day":   "d",
					"weeks": "w",
					"week":  "w",
					"ago":   "",
				},
			},
		},
	})
}
```

After this configuration, instead of getting, for example, `4 days ago`, you'll get `4 d`, and instead of `1 week ago`, you'll get `1 w`. For other languages, it's pretty much the same thing:

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
		Translations: []timeago.Translation{
			{
				Language: "ru",
				Translations: map[string]string{
					"день":  "д",
					"дня":   "д",
					"дней":  "д",
					"назад": "",
				},
			},
		},
	})
}
```

With this configurations, you'll get `5 д` instead of `5 дней назад`.

:::tip Supported words
You can find the full list of words that you can override in `langs/` directory in the root of the project, or you can find them in our [GitHub repository](https://github.com/SerhiiCho/timeago/tree/master/langs).
:::
