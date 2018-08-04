# Star Wars Slash Command for Mixmax
[ ![Codeship Status for ErickWendel/mixmax-starwars-slash-command](https://app.codeship.com/projects/cd24b640-79d9-0136-7943-1a1745bf82cc/status?branch=master)](https://app.codeship.com/projects/300585)


This is an open source Mixmax Slash Command. See <https://app.swaggerhub.com/apis/ErickWendel/starwars-slash-command/0.1> for more information about how to use this example code in Mixmax.

For a more complex example using multi-word search, see [Soundcloud command](https://github.com/simonxca/mixmax-soundcloud-slash-command).

## Testing
1. `npm test`
## Development URLs
  `GET` - https://a2dd4hapxd.execute-api.us-east-1.amazonaws.com/prod/resolver <br/>
  `GET` - https://a2dd4hapxd.execute-api.us-east-1.amazonaws.com/prod/typeahead
 
## Running locally

1. Install using `npm install`

To simulate locally how Mixmax calls the typeahead URL (to return a JSON list of typeahead results), run:
```
serverless invoke local -f typeahead --data '{"queryStringParameters": {"text":"r2"}}'
```

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
serverless invoke local -f resolver --data '{"queryStringParameters": {"text":"r2"}}'
```
