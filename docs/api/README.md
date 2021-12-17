---
title: JACE-ITA. Сервіс ітеративного тренування моделей машинного навчання v1.0.1
language_tabs:
  - http: HTTP
  - javascript: JavaScript
language_clients:
  - shell: curl
  - javascript: axios
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="jace-ita-">JACE-ITA. Сервіс ітеративного тренування моделей машинного навчання v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Надає можливості тренування моделей машинного навчання для розпізнавання іменованих сутностей в текстах природньої мови, можливості розпізнавання текстів та оцінювання моделей машиного навчання. Також надає послуги управління моделями (збереження, імпорт, експорт...)

Base URLs:

* <a href="http://localhost:8080">http://localhost:8080</a>

Email: <a href="mailto:boldak.andrey@gmail.com">jace-ita</a> Web: <a href="http://localhost:3001/">jace-ita</a> 
License: <a href="http://localhost:8080/license.html">MIT License</a>

<h1 id="jace-ita---">Загальна інформація</h1>

## get__

> Code samples


```javascript
import axios from "axios";

const options = {method: 'GET', url: 'http://localhost:3001/', headers: {Accept: 'text/html'}};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /`

*Отримати загальний опис сервісу*

Повертає сторінку загального опису

> Example responses

> 200 Response

```
"Not found"
```

<h3 id="get__-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Успішна відповідь|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jace-ita---">Використання моделей машинного навчання</h1>

## post__train

> Code samples



```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:8080/train',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  data: {
    "model": {
      "name": "413ijapd9z8_11",
      "locale": "uk"
    },
    "data": [
      {
        "id": "f4e650af-d385-4a02-870c-de1d9c849856",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
        "entities": []
      },
      {
        "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " літак Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              15,
              25
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      },
      {
        "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              81,
              91
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      }
    ]
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /train`

*Тренування модель*

Повертає масив оцінок втрат в процесі тренування

> Body parameter

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "f4e650af-d385-4a02-870c-de1d9c849856",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            15,
            25
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    },
    {
      "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            81,
            91
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="post__train-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[req_res_type](#schemareq_res_type)|false|none|

> Example responses

> 200 Response

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "f4e650af-d385-4a02-870c-de1d9c849856",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            15,
            25
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    },
    {
      "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            81,
            91
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    }
  ],
  "cmd": "train",
  "workDir": ".work",
  "_id": "64f3cb92-91ed-495e-81dd-b4feb7a9ca7a",
  "result": {
    "model": {
      "name": "413ijapd9z8_11",
      "locale": "uk",
      "losses": [
        2.8516662620657643e-10,
        1.9999518152968816e-11,
        8.843616670745275e-14,
        5.960763079332696e-13,
        4.41737591707591e-13,
        1.720681694490366e-11,
        5.419595893077769e-14,
        7.124316691272642e-18,
        3.005279446814938e-16,
        5.486336935016558e-14,
        2.8904606079119365e-14,
        2.500361111621608e-17,
        6.599091476140698e-16,
        5.575000984853649e-16,
        1.9167474007464207e-14,
        4.478597065167003e-17,
        5.876706266051261e-16,
        1.302613974793903e-16,
        2.4533959015360344e-13,
        1.6979998303237087e-18,
        1.5972610548080238e-15,
        1.164000183108864e-14,
        1.5974170080153159e-16,
        7.55049314374574e-16,
        1.660120783323992e-12,
        4.993328234136964e-17,
        8.880231581167382e-16,
        1.1399758715922978e-16,
        7.841145283351029e-19,
        1.5891710853368774e-18,
        7.602289903839921e-15,
        3.893656098288174e-18,
        5.074497254099991e-16,
        8.727640933273373e-14,
        4.513161407959814e-16,
        8.225111201260867e-16,
        1.0674964342295493e-13,
        1.1670989909956426e-14,
        1.1535640246199787e-15,
        1.1471819425397362e-16,
        5.861170244614971e-14,
        4.1256871737018027e-16,
        8.654413897099205e-16,
        8.308887279465393e-15,
        5.999102658661955e-13,
        4.488541694057306e-16,
        1.6050754917363336e-15,
        2.0847534254075516e-16,
        8.879291705459109e-16,
        8.137069112223871e-15
      ]
    },
    "data": [
      {
        "id": "f4e650af-d385-4a02-870c-de1d9c849856",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
        "entities": []
      },
      {
        "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " літак Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              15,
              25
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      },
      {
        "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              81,
              91
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      }
    ],
    "cmd": "train",
    "workDir": ".work",
    "_id": "64f3cb92-91ed-495e-81dd-b4feb7a9ca7a"
  }
}
```

<h3 id="post__train-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Відповідь сервісу|[response_type](#schemaresponse_type)|

<aside class="success">
This operation does not require authentication
</aside>

## post__predict

> Code samples

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:8080/predict',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  data: {
    "model": {
      "name": "413ijapd9z8_11",
      "locale": "uk"
    },
    "data": [
      {
        "id": "81bb8f24-a72b-4a30-9850-b4fe3bbb1298",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
        "entities": []
      },
      {
        "id": "0158c01c-80fe-46fc-a910-a9927c6e2ec6",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " літак Віталія Хомутинніка",
        "entities": []
      }
    ]
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /predict`

*Розпізнавання тексту*

Повертає розпізнані іменовані сутності

> Body parameter

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "81bb8f24-a72b-4a30-9850-b4fe3bbb1298",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "0158c01c-80fe-46fc-a910-a9927c6e2ec6",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": []
    }
  ]
}
```

<h3 id="post__predict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[req_res_type](#schemareq_res_type)|false|none|

> Example responses

> 200 Response

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "81bb8f24-a72b-4a30-9850-b4fe3bbb1298",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "0158c01c-80fe-46fc-a910-a9927c6e2ec6",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": []
    }
  ],
  "cmd": "predict",
  "workDir": ".work",
  "_id": "70c644e0-04ea-422a-b8a3-86f72593f4c7",
  "result": {
    "model": {
      "name": "413ijapd9z8_11",
      "locale": "uk"
    },
    "data": [
      {
        "id": "81bb8f24-a72b-4a30-9850-b4fe3bbb1298",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
        "entities": []
      },
      {
        "id": "0158c01c-80fe-46fc-a910-a9927c6e2ec6",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " літак Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              15,
              25
            ],
            "score": 1
          }
        ]
      }
    ],
    "cmd": "predict",
    "workDir": ".work",
    "_id": "70c644e0-04ea-422a-b8a3-86f72593f4c7"
  }
}
```

<h3 id="post__predict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Відповідь сервісу|[response_type](#schemaresponse_type)|

<aside class="success">
This operation does not require authentication
</aside>

## post__eval

> Code samples

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:8080/eval',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  data: {
    "model": {
      "name": "413ijapd9z8_11",
      "locale": "uk"
    },
    "data": [
      {
        "id": "f4e650af-d385-4a02-870c-de1d9c849856",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
        "entities": []
      },
      {
        "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " літак Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              15,
              25
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      },
      {
        "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              81,
              91
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      }
    ]
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /eval`

*Оцінювання моделі*

Повертає масив оцінок для типів іменованих сутностей

> Body parameter

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "f4e650af-d385-4a02-870c-de1d9c849856",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            15,
            25
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    },
    {
      "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            81,
            91
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="post__eval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[req_res_type](#schemareq_res_type)|false|none|

> Example responses

> 200 Response

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "f4e650af-d385-4a02-870c-de1d9c849856",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            15,
            25
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    },
    {
      "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            81,
            91
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    }
  ],
  "cmd": "eval",
  "workDir": ".work",
  "_id": "b3081861-e0d1-4fc2-b5b0-0a0965bac828",
  "result": {
    "model": {
      "name": "413ijapd9z8_11",
      "locale": "uk",
      "metrics": {
        "PERSON": {
          "p": 100,
          "r": 100,
          "f": 100
        }
      }
    },
    "data": [
      {
        "id": "f4e650af-d385-4a02-870c-de1d9c849856",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
        "entities": []
      },
      {
        "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": " літак Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              15,
              25
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      },
      {
        "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
        "node": "subSentence",
        "concept": "SYNTAX",
        "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
        "entities": [
          {
            "type": "PERSON",
            "pos": [
              81,
              91
            ],
            "nestedIn": [
              "subSentence"
            ]
          }
        ]
      }
    ],
    "cmd": "eval",
    "workDir": ".work",
    "_id": "b3081861-e0d1-4fc2-b5b0-0a0965bac828"
  }
}
```

<h3 id="post__eval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Відповідь сервісу|[response_type](#schemaresponse_type)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_entity_type">entity_type</h2>
<!-- backwards compatibility -->
<a id="schemaentity_type"></a>
<a id="schema_entity_type"></a>
<a id="tocSentity_type"></a>
<a id="tocsentity_type"></a>

```json
{
  "type": "PERSON",
  "pos": [ 81, 91 ]
}

```

Іменована сутність

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Тип іменованої сутності|
|pos|array|true|none|Стартова та кінцева позиції|

<h2 id="tocS_text_data_type">text_data_type</h2>
<!-- backwards compatibility -->
<a id="schematext_data_type"></a>
<a id="schema_text_data_type"></a>
<a id="tocStext_data_type"></a>
<a id="tocstext_data_type"></a>

```json
{
  "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
  "node": "subSentence",
  "concept": "SYNTAX",
  "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
  "entities": [
    {
      "type": "PERSON",
      "pos": [ 81, 91 ]
    }
  ]
}

```

Елемент даних

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Текстові данні|
|entities|array|true|none|Масив іменованих сутностей|

<h2 id="tocS_req_res_type">req_res_type</h2>
<!-- backwards compatibility -->
<a id="schemareq_res_type"></a>
<a id="schema_req_res_type"></a>
<a id="tocSreq_res_type"></a>
<a id="tocsreq_res_type"></a>

```json
{
  "model": {
    "name": "413ijapd9z8_11",
    "locale": "uk"
  },
  "data": [
    {
      "id": "f4e650af-d385-4a02-870c-de1d9c849856",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " 19 лютого РНБО наклала санкції на кілька десятків фізичних осіб та компаній",
      "entities": []
    },
    {
      "id": "39c7ef57-b87d-43de-b1ac-d0e6c61bccc3",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": " літак Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            15,
            25
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    },
    {
      "id": "ebd3d01e-e0ab-487d-91bc-1f82d53cfcb9",
      "node": "subSentence",
      "concept": "SYNTAX",
      "text": "Змінили реєстрацію і літають далі літаки колишнього нардепа і бізнесмена Віталія Хомутинніка",
      "entities": [
        {
          "type": "PERSON",
          "pos": [
            81,
            91
          ],
          "nestedIn": [
            "subSentence"
          ]
        }
      ]
    }
  ]
}

```

Тип даних для обміну з сервісом.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|object|true|none|Опис моделі|
|» name|string|true|none|Ім'я моделі|
|» locale|string|true|none|Локалізація моделі (мова розпізнавання)|
|» losses|array|false|none|Масив оцінок втрат при тренуванні моделі|
|» metrics|object|false|none|Результати оцінювання моделі|
|»» **additionalProperties**|object|false|none|Оцінки розпізнавання іменованої сутності певного типу|
|»»» p|number|false|none|none|
|»»» r|number|false|none|none|
|»»» f|number|false|none|none|
|data|array|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|locale|en|
|locale|uk|
|locale|ru|

<h2 id="tocS_response_error_type">response_error_type</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_error_type"></a>
<a id="schema_response_error_type"></a>
<a id="tocSresponse_error_type"></a>
<a id="tocsresponse_error_type"></a>

```json
{
  "error": "string"
}

```
Помилкова відповідь

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Повідомлення про помилку|

<h2 id="tocS_response_warning_type">response_warning_type</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_warning_type"></a>
<a id="schema_response_warning_type"></a>
<a id="tocSresponse_warning_type"></a>
<a id="tocsresponse_warning_type"></a>


Попереджувальна відповідь

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warning|string|true|none|Повідомлення про попередження|

<h2 id="tocS_response_type">response_type</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_type"></a>
<a id="schema_response_type"></a>
<a id="tocSresponse_type"></a>
<a id="tocsresponse_type"></a>


### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[req_res_type](#schemareq_res_type)|false|none|Описує структуру даних, яка передається в сервіс в якості завдання. Успішний результат оброблення повертається сервісом в такій само структурі.|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» result|any|false|none|Результат оброблення|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[req_res_type](#schemareq_res_type)|false|none|Описує структуру даних, яка передається в сервіс в якості завдання. Успішний результат оброблення повертається сервісом в такій само структурі.|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[response_error_type](#schemaresponse_error_type)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[response_warning_type](#schemaresponse_warning_type)|false|none|none|

