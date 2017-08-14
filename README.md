# BBCode Markup Converter
A BBCode converter program written using JS and Electron.

It will convert BBCode to Wiki Markup, and BBCode to HTML5

Demo: https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js

# Installation
Download the most recent zip and extract it to a new directory.

Install the newest version of [Electron](https://github.com/electron/electron/releases).

Edit run.bat to reflect your information:

```batch
C:\Path\to\electron.exe C:\Path\to\bbc-converter
PAUSE
```

Double click run.bat

# Usage
Select what you would like to convert to, `Wiki Markup or HTML5`
Paste your BBCode into `Input BBCode` and click `Convert`!
The output will appear in `output` and a preview will show in `Preview (HTML5)`

## Supported BBCode Syntax
You can click on `syntax` or read below.

Markdown | HTML5
------------ | -------------
[b] - [/b] | [b] - [/b]
[i] - [/i] | [i] - [/i]
[code] - [/code] | [code] - [/code]
[s] - [/s] | [s] - [/s]
[list] - [/list] | [list] - [/list]
[size= {font} pt] - [/size] | [size= {font} pt] - [/size]
[url= {url} ] {text} - [/url] | [url= {url} ] {text} - [/url]
[url] - [/url] | [url] - [/url]

# Screenshots
![Full App](http://i.imgur.com/SOk466A.png)
