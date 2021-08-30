# blockly

## injection

Blockly 작업 공간을 페이지에 주입

```javascript
Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: false
});
```

소스에서는 `BLOCKLY_TOOLBOX_XML['standard']`를 사용. 변수 내용은 `toolbox_standard.js`에서 확인할 수 있다.

- toolbox: 편집기의 도구 상자를 정의하는 XML 요소
- scrollbars: 작업 공간에 스크롤 막대를 표시할지 여부





### generateCodeAndLoadIntoInterpreter()

```javascript
function generateCodeAndLoadIntoInterpreter() {
    resetUi();

    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');

    latestCode = Blockly.JavaScript.workspaceToCode(workspace);
}
```



#### 1. STATEMENT_PREFIX

모든 명령문 앞에 삽입할 임의의 코드. %1의 모든 인스턴스는 블록 ID로 대체됩니다.

> Arbitrary code to inject before every statement. Any instances of '%1' will be replaced by the block ID of the statement. E.g. 'highlight(%1);\n'

```javascript
Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
```



#### 2. addReservedWords

`addReservedWords(words)`

이 언어의 예약어 목록에 하나 이상의 단어를 추가하십시오.

>Add one or more words to the list of reserved words for this language.

```javascript
Blockly.JavaScript.addReservedWords('highlightBlock');
```



#### 3. workspaceToCode

`workspaceToCode(workspace)`

`@returns string`

workspace의 모든 블록에 대한 코드를 지정된 언어로 생성합니다.

> Generate code for all blocks in the workspace to the specified language.

```javascript
latestCode = Blockly.JavaScript.workspaceToCode(workspace);
```



### runCode()

```javascript
function runCode() {
    resetUi();

    myInterpreter = new Interpreter(latestCode, initApi);
    intervalRunID = window.setInterval(runCallback, 0);
}
```





---------------



## Android

webView와 javaScript을 연결하기 위해서

```java
mWebView.addJavascriptInterface(getContext(), "Android");
```

Interface를 두어서 `Android`라고 할 때 사용하기로 함.



