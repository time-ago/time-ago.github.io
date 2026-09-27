---
outline: deep
search: false
title: Contribute - v1
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

## Contribute translation

If you want to contribute support for a language that is fully supported, all you need to do is copy/paste 2 files and change them to match the language you want to add.

After that, add 1 line to the `README.md` file and 1 rule to the `rules.go` file. Here is my [commit](https://codeberg.org/timeago/timeago/commit/c1ee0429b540f1cce5eb61b6a3441022d9cb43e7) for supporting Ukrainian language that shows the changes I made to add support. It's pretty straightforward. Waiting for your PR 😉.

### Translation files

Translation files live in the `langs` directory. Each translation file is a simple JSON object. Here's an example of `en.json`:

```json
{
    "Ago": "ago",
    "Online": "Online",
    "Second": "second",
    "Seconds": "seconds",
    "Minute": "minute",
    "Minutes": "minutes",
    "Hour": "hour",
    "Hours": "hours",
    "Day": "day",
    "Days": "days",
    "Week": "week",
    "Weeks": "weeks",
    "Month": "month",
    "Months": "months",
    "Year": "year",
    "Years": "years"
}
```

Some languages (like Russian) have multiple plural forms of words. For example, English has only `second` and `seconds`, but Russian has three forms: `секунда`, `секунд`, and `секунды`. For these cases, we can add additional translations for seconds, minutes, hours, days, weeks, months, and years. Here is an example of `ru.json`:

```json
{
    "Ago": "назад",
    "Online": "В сети",
    "Second": "секунда",
    "Seconds": "секунды",
    "SecondsSpecial": "секунд",
    "Minute": "минута",
    "Minutes": "минуты",
    "MinutesSpecial": "минут",
    "Hour": "час",
    "Hours": "часа",
    "HoursSpecial": "часов",
    "Day": "день",
    "Days": "дня",
    "DaysSpecial": "дней",
    "Week": "неделя",
    "Weeks": "недели",
    "WeeksSpecial": "недель",
    "Month": "месяц",
    "Months": "месяца",
    "MonthsSpecial": "месяцев",
    "Year": "год",
    "Years": "года",
    "YearsSpecial": "лет"
}
```

You can see that it has `SecondsSpecial`, `MinutesSpecial`, `HoursSpecial`, `DaysSpecial`, `WeeksSpecial`, and `YearsSpecial` keys.

### Rules

All rules for each language are defined in the `getRules` function in the `rules.go` file. A rule is just a set of conditions that define when to apply the singular form and when to apply the plural form.

Here is the example for English rules:

```go
func getRules(number, lastDigit int) map[string]models.Rule {
	return map[string]models.Rule{
		"en": {
			Single: number == 1,
			Plural: number > 1 || number == 0,
		},
	}
}
```

We'll use the singular form when the number is equal to 1, and plural if the number is more than 1 or the number is 0. You can easily write your own rules for your language.
