(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{400:function(t,e,v){"use strict";v.r(e);var r=v(54),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"програмнии-модуль-jace-ita-програма-та-методика-випробувань"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#програмнии-модуль-jace-ita-програма-та-методика-випробувань"}},[t._v("#")]),t._v(" Програмний модуль @jace-ita | Програма та методика випробувань")]),t._v(" "),v("h2",{attrs:{id:"об-єкт-випробувань"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#об-єкт-випробувань"}},[t._v("#")]),t._v(" Об'єкт випробувань")]),t._v(" "),v("p",[t._v("Об'єктом випробувань є "),v("strong",[t._v('програмний модуль @jace-ita – "Сервіс ітеративного тренування моделей машинного навчання"')]),t._v(", що призначений для надання доступу до реєстру специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою, а також для управління реєстром специфікацій, зокрема, реєстрації, оновлення та видалення специфікацій API мікросервісів і робочих процесів.")]),t._v(" "),v("h2",{attrs:{id:"мета-випробувань"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#мета-випробувань"}},[t._v("#")]),t._v(" Мета випробувань")]),t._v(" "),v("p",[t._v("Перевірити надійність функціонування програмного модуля @jace-ita та його окремих функцій.")]),t._v(" "),v("h2",{attrs:{id:"вимоги-до-програмного-модуля"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#вимоги-до-програмного-модуля"}},[t._v("#")]),t._v(" Вимоги до програмного модуля")]),t._v(" "),v("p",[t._v("Програмний модуль є сервісом ітеративного тренування моделей машинного навчання, що повинен задовільнати наступним вимогам.")]),t._v(" "),v("p",[t._v("Функціонування програмного модуля "),v("strong",[t._v("не має призводити до збою (фатального порушення роботи системи)")]),t._v(" та "),v("strong",[t._v("видавати діагностику стану системи та повідомлення про будь-які помилки, що виникли")]),t._v(":")]),t._v(" "),v("ul",[v("li",[t._v('програмний модуль у відповідь на запит "Отримати загальний опис сервісу" повинен повернути сторінку загального опису, код відповіді – 200')]),t._v(" "),v("li",[t._v('програмний модуль у відповідь на запит "Тренування модель" повинен повертати масиви оцінок втрат в процесі тренування, код відповіді – 200')]),t._v(" "),v("li",[t._v('програмний модуль у відповідь на запит "Розпізнавання тексту" повинен повернути розпізнані іменовані сутності, код відповіді – 200')]),t._v(" "),v("li",[t._v('програмний модуль у відповідь на запит "Оцінювання моделі" повинен повернути масив оцінок для типів іменованих сутностей, код відповіді – 200')])]),t._v(" "),v("h2",{attrs:{id:"вимоги-до-програмноі-документаціі"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#вимоги-до-програмноі-документаціі"}},[t._v("#")]),t._v(" Вимоги до програмної документації")]),t._v(" "),v("p",[t._v("Склад програмної документації, пропонованої на випробуванні:")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://docs.cntd.ru/document/1200007652",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.402-78."),v("OutboundLink")],1),t._v(" ЕСПД. Опис програми")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://docs.cntd.ru/document/1200007650",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.301-79."),v("OutboundLink")],1),t._v(" ЕСПД. Програма та методика випробувань. Вимоги до змісту та оформлення")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://docs.cntd.ru/document/1200007651",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.401-78."),v("OutboundLink")],1),t._v(" ЕСПД. Текст програми. Вимоги до змісту та оформлення")])]),t._v(" "),v("p",[t._v("Для запуску комплексів тестів використовуються менеджер пакетів для мови програмування JavaScript – "),v("code",[t._v("npm (Node Package Manager)")]),t._v(", та команда")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),v("p",[t._v("Порядок проведення випробувань:")]),t._v(" "),v("ol",[v("li",[t._v("Виконати комплекс тестів "),v("strong",[t._v('"Тести для шляху "/""')]),t._v(", запустивши файл "),v("code",[t._v("root.test.js")])]),t._v(" "),v("li",[t._v("Виконати комплекс тестів "),v("strong",[t._v('"Тести для шляху "/eval""')]),t._v(", запустивши файл "),v("code",[t._v("eval.test.js")])]),t._v(" "),v("li",[t._v("Виконати комплекс тестів "),v("strong",[t._v('"Тести для шляху "/pretict""')]),t._v(", запустивши файл "),v("code",[t._v("pretict.test.js")])]),t._v(" "),v("li",[t._v("Виконати комплекс тестів "),v("strong",[t._v('"Тести для шляху "/train""')]),t._v(", запустивши файл "),v("code",[t._v("train.test.js")])])]),t._v(" "),v("p",[t._v("Для обробки результатів тестування та створення протоколу випробувань в HTML використовується "),v("code",[t._v("jest-html-reporters")]),t._v(" версії "),v("a",{attrs:{href:"https://www.npmjs.com/package/jest-html-reporters/v/2.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.1.6"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("h2",{attrs:{id:"методи-випробувань"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#методи-випробувань"}},[t._v("#")]),t._v(" Методи випробувань")]),t._v(" "),v("p",[t._v("Для проведення випробувань пропонується наступий переліків комплексів тестів та окремих тестових прикладів:")]),t._v(" "),v("ul",[v("li",[t._v("Комплекс тестів "),v("strong",[t._v('"Тести для шляху "/""')]),t._v(", що міститься у файлі "),v("code",[t._v("root.test.js")]),t._v(", має наступні тестові приклади:\n"),v("ul",[v("li",[t._v('Тест перевірки запиту "Отримати загальний опис сервісу"')]),t._v(" "),v("li",[t._v('Тест перевірки запиту "Отримати статистику сервісу"')])])]),t._v(" "),v("li",[t._v("Комплекс тестів "),v("strong",[t._v('"Тести для шляху "/eval""')]),t._v(", що міститься у файлі "),v("code",[t._v("eval.test.js")]),t._v(", має наступні тестові приклади:\n"),v("ul",[v("li",[t._v('Тест перевірки запиту "Оцінювання моделі"')])])]),t._v(" "),v("li",[t._v("Комплекс тестів "),v("strong",[t._v('"Тести для шляху "/pretict""')]),t._v(", що міститься у файлі "),v("code",[t._v("pretict.test.js")]),t._v(", має наступні тестові приклади:\n"),v("ul",[v("li",[t._v('Тест перевірки запиту "Розпізнавання тексту"')])])]),t._v(" "),v("li",[t._v("Комплекс тестів "),v("strong",[t._v('"Тести для шляху "/train""')]),t._v(", що міститься у файлі "),v("code",[t._v("train.test.js")]),t._v(", має наступні тестові приклади:\n"),v("ul",[v("li",[t._v('Тест перевірки запиту "Тренування модель"')])])])]),t._v(" "),v("h2",{attrs:{id:"додаток"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#додаток"}},[t._v("#")]),t._v(" Додаток")]),t._v(" "),v("p",[t._v("Вміст тестових файлів, результати тестування програмного модуля та розширена інформація про тестове покриття, яке в середньому склало 100.0%, наведено в:")]),t._v(" "),v("p",[v("a",{attrs:{href:"../testReport/test-report.html",target:"blank"}},[t._v("Протокол випробувань")])]),t._v(" "),v("p",[v("a",{attrs:{href:"../coverage/lcov-report/index.html",target:"blank"}},[t._v("Тестове покриття")])])])}),[],!1,null,null,null);e.default=_.exports}}]);