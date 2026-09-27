---
title: Contribute - v3
description: Manual for contributing to the Timeago project by adding a new language support
---

# Contribute Translation
You can contribute a language support in 3 simple steps. All you need to do is to copy/paste several files and change them to match the language that you want to add.

Don't be afraid that there are so many steps, it's just because I've described each step in detail. In fact, it's very easy to add a new language support because last steps are just adding information to the `CHANGELOG.md` and `README.md` files.

As for this documentation website, I'll take care of updating it after your contribution.

:::tip Good Contribution Reference
For better reference, I've added Japanese language support in [this commit](https://codeberg.org/timeago/timeago/commit/bad0b8bd4149048a44b6a451457f8ab96dae0049). You can use it as a reference to see what steps I did.
:::

## Step 1. Language Set File
Language set files live in [langs](https://codeberg.org/timeago/timeago/src/branch/master/langs) directory. Each translation file is a JSON object with the name matching the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) standard of the language that you want to add.

These files follow the [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules) for plural rules for each language. Keep in mind that the only required field that we need to define for time unit is `other`, since this field is used as a fallback if no other rule matches.

Here's the example of `ru.json`

```json
{
    "lang": "ru",
    "format": "{num} {timeUnit} {ago}",
    "ago": "назад",
    "online": "В сети",
    "justnow": "Только что",

    "second": {
        "zero": "секунд",
        "one": "секунда",
        "few": "секунды",
        "many": "секунд",
        "other": "секунды"
    },
    "minute": {
        "zero": "минут",
        "one": "минута",
        "few": "минуты",
        "many": "минут",
        "other": "минуты"
    },
    "hour": {
        "zero": "часов",
        "one": "час",
        "few": "часа",
        "many": "часов",
        "other": "часа"
    },
    "day": {
        "zero": "дней",
        "one": "день",
        "few": "дня",
        "many": "дней",
        "other": "дня"
    },
    "week": {
        "zero": "недель",
        "one": "неделя",
        "few": "недели",
        "many": "недель",
        "other": "недели"
    },
    "month": {
        "zero": "месяцев",
        "one": "месяц",
        "few": "месяца",
        "many": "месяцев",
        "other": "месяца"
    },
    "year": {
        "zero": "лет",
        "one": "год",
        "few": "года",
        "many": "лет",
        "other": "года"
    }
}
```

In this file, we don't actually need to define the `few` field, since the fallback also matches `few`, but I wanted to demonstrate the full version of the file so you have an idea of how many fields there are.

### Fields
Let me give you a little bit more explanation about the fields in the file:

- `"lang": "ru"` - The language code based on the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) standard.
- `"format": "{num} {timeUnit} {ago}"` - This is the format of the output string.
  - `{num}` is the number of time units like `1`, `2`, `3`, etc.
  - `{timeUnit}` is the time unit itself like `second`, `minute`, `hour`, etc.
  - `{ago}` is the word that is used to indicate that the time is in the past or in the future.
- `"ago": "назад"` - This is the word that is used to indicate that the time is in the past.
- `"online": "В сети"` - This is the word that is used to indicate that the user is online.
- `"justnow": "Только что"` - This is the word that is used to indicate that the time is just now, when the time is less than 1 minute.

## Step 2. Language Rules
All rules for each language are defined in the `grammarRules` variable in the [rules.go](https://codeberg.org/timeago/timeago/src/branch/master/rules.go) file. Rule is just a set of conditions that define when to apply particular form from the language set.

Here is the example for Russian rules:

```go
var grammarRules = func(num int) map[string]*Rule {
	end := num % 10

	return map[string]*Rule{
		"ru": {
			Zero: num == 0,
			One:  num == 1 || (num > 20 && end == 1),
			Two:  num == 2,
			Few:  end == 2 || end == 3 || end == 4,
			Many: (num >= 5 && num <= 20) || end == 0 || (end >= 5 && end <= 9),
		},
	}
}
```

In these rules we tell that Timeago should use the `one` form when number is `1` or when number is more than `20` and the last digit is `1`. In English we don't have such complicated rules for plural forms. Here how English rules look like:

```go
var grammarRules = func(num int) map[string]*Rule {
	return map[string]*Rule{
		"en": {
			Zero: num == 0,
			One:  num == 1,
			Two:  num == 2,
			Few:  num > 1,
			Many: num > 1,
		},
	}
}
```

As a convenience, if the language that you want to add matches the rules of already existing language, you can just add your language [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) code to the rule key like this:

```go
var grammarRules = func(num int) map[string]*Rule {
	end := num % 10

	return map[string]*Rule{
		"en,nl,de": {
			Zero: num == 0,
			One:  num == 1,
			Two:  num == 2,
			Few:  num > 1,
			Many: num > 1,
		},
	}
}
```

English, Dutch, and German languages have the same rules for plural forms, so we can add them to the same rule key.

## Step 3. Tests
Tests for languages live in the `tests` directory. Each language has its own file. The easies way to add tests for your language is to copy paste one of the tests and change the test cases to match your language.

## Step 4. New Constant
To the top of the [config.go](https://codeberg.org/timeago/timeago/src/branch/master/config.go) file, add a new constant with the language code that you want to add. Here is an example of adding Chinese language constant:

```go
package timeago

const (
	LangEn string = "en" // English
	LangRu string = "ru" // Russian
	LangUk string = "uk" // Ukrainian
	LangNl string = "nl" // Dutch
	LangDe string = "de" // German
	LangZh string = "zh" // Chinese // [!code ++]
)
```

## Step 5. A Country Flag
To the `README.md` file add a country flag for the language that you want to add just. Your new flag should be the last one there. Here is an example of adding a Chinese flag:

```md
... languages, such as 🇬🇧 🇷🇺 🇺🇦 🇳🇱 🇩🇪 🇨🇳 🇯🇵. For more ...
```

## Step 6. Changelog
The last step is to update the [CHANGELOG.md](https://codeberg.org/timeago/timeago/src/branch/master/CHANGELOG.md) file to let the users know that you've added a new language support. Here is an example of how I've added Chinese language to the change log:

```md
- Added [OnlineThreshold](https://timeago.serhiicho.com/configurations.html#thresholds) parameter to the configurations to set the threshold for the "Online" status
- Added [JustNowThreshold](https://timeago.serhiicho.com/configurations.html#justnowthreshold-example) parameter to the configurations to set the threshold for the "Just now" status
- Added support for Chinese Simplified language 🇨🇳 // [!code ++]
```

## Conclusion
That's it! In total, you should have 6 files changed or added. After you've done all the steps, you can create a pull request and I'll review it as soon as possible. If everything is fine, I'll merge your pull request and your language will be available in the next release of the Timeago.

You can push your changes to the master branch, and I will handle the rest of the work to update the documentation website and release a new version of Timeago.
