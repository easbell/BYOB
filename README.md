# Colorado politican's deleted tweets.
This is a REST API containing recently deleted tweets from Colorado politicans.

## Make Requests
- Use GET, POST, DELETE endpoints view, add to, or delete from the API.

## Initial:
The base url to make requests to the api:
#### `https://deleted-tweets.herokuapp.com`

#### GET `/api/v1/parties` (All Parties)
The response sends all the political parties in the database. (id, name, symbol, and year founded):

| Name         | type      | Description                             |
| :------------|:----------|:----------------------------------------|
| id           | integer   | unique id for each party                |
| name         | string    | name of the party                       |
| symbol       | string    | symbol associated with part             |

Response from `https://deleted-tweets.herokuapp.com/api/v1/parties` example:
```json
[
  {
    "id": "1",
    "name": "Democratic Party",
    "symbol": "Donkey",
    "founded": "1828",
    "created_at": "2019-05-03T16:02:46.742Z",
    "updated_at": "2019-05-03T16:02:46.742Z"
  },
  {
    "id": 2,
    "name": "Republican Party",
    "symbol": "Elephant",
    "founded": "1854",
    "created_at": "2019-05-03T16:02:46.753Z",
    "updated_at": "2019-05-03T16:02:46.753Z"
  }
]
```

#### GET `/api/v1/parties/:id` (Request Single Party)
Response will send a single party that matches the id parameter in the request

Response from `https://deleted-tweets.herokuapp.com/api/v1/parties/1` example:
```json
[
  {
    id: 1,
    name: "Democratic Party",
    symbol: "Donkey",
    founded: "1828",
    created_at: "2019-05-03T16:02:46.742Z",
    updated_at: "2019-05-03T16:02:46.742Z"
  },
]
```

#### POST `/api/v1/parties/` (Create New Party)
A user can add an additional tweet to the database. Below is the required parameters and an example post.

| Name         | type      | Description                                     |
| :------------|:----------|:------------------------------------------------|
| name         | string    | name of party                                   |
| symbol       | string    | symbol of party                                 |
| founded      | string    | year party was founded                          |

POST Party Example:
```json
 {
  "name": "Independent Party", 
  "symbol": "Eagle", 
  "founded": "1967"
 }
```

#### POST `/api/v1/parties/:id/tweets` (Create New Tweet)
A user can add an additional tweet to the database. Below is the required parameters and an example post.

| Name         | type      | Description                                     |
| :------------|:----------|:------------------------------------------------|
| username     | string    | name of party                                   |
| content      | string    | content of deleted tweet                        |
| date_deleted | string    | date that the tweet was deleted                 |

POST Tweet Example:
```json
 {
  "username": "@Hickenlooper",
  "content": "Touring the @UBCJA_Official training center before #workersforum today. To tackle income inequality, we must     
   partner with labor unions to create the largest expansion of apprenticeships and skills training in our country’s history. 
   #UnionStrong",
  "date_deleted": "Deleted after 3 minutes at 6:05 PM on 27 Apr."
}
```

#### DELETE `/api/v1/tweets/:id` (Delete a specific tweet)
A user can delete a specific tweet. The request parameter id must match the of the tweet to be deleted.

Response from `https://deleted-tweets.herokuapp.com/api/v1/tweets/1` example:
```
 "Tweet was deleted."
```
