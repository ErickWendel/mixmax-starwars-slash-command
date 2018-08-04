# Star Wars Slash Command for Mixmax

This is an open source Mixmax Slash Command. See <https://lzssmvqj3f.execute-api.us-east-1.amazonaws.com/dev> for more information about how to use this example code in Mixmax.

For a more complex example using multi-word search, see [Soundcloud command](https://github.com/simonxca/mixmax-soundcloud-slash-command).

## Testing
1. `npm test`
## Development URLs
 - https://lzssmvqj3f.execute-api.us-east-1.amazonaws.com/dev/typeahead
 - https://lzssmvqj3f.execute-api.us-east-1.amazonaws.com/dev/resolver
 
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
