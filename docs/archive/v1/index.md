---
outline: deep
search: false
title: Get Started - v1
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

# Get Started

## Quick Start

```bash
go get -u github.com/SerhiiCho/timeago
```

## Supported languages

<table>
  <thead>
    <tr>
      <th>Flag</th>
      <th>Language</th>
      <th>Short representation</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>🇬🇧</td>
      <td>English</td>
      <td>en</td>
    </tr>
    <tr>
      <td>🇷🇺</td>
      <td>Russian</td>
      <td>ru</td>
    </tr>
    <tr>
      <td>🇺🇦</td>
      <td>Ukrainian</td>
      <td>uk</td>
    </tr>
  </tbody>
</table>

## Usage

For outputting post publishing date or other content, you can just pass the date to the `timeago.Take()` function. It will calculate the interval between now and the given date and return the converted format.

```go
timeago.Take("2019-10-23 10:46:00") // after 10 seconds outputs: 10 seconds ago
```

If you want to show last user login status (whether the user is online or not), you can optionally add `|online` to the datetime string. This will display **Online** if the date interval is within 60 seconds.

```go
timeago.Take("2019-10-23 10:46:00|online")
```
