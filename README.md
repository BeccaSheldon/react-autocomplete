This is a little bootstrapped from create-react-app and made for a frontend interview exercise. The `<Search />` component hits an API endpoint after three letters have been typed into the `<Input />` component. It then returns possible results in a `<List />` component. Once the user selects a `<ListItem />`, a `<Card/>` component shows in a `<Results />` component beneath `<Search />`.

## Intention:
- Impress interviewing committee. :raised_hands:
- Receive helpful feedback and grow from it. :white_check_mark:

##  Design:
- Clean, brand-inspired UI.
- Small microinteractions for a bit of interactivity.
- Clear UX for searching, selecting, and viewing results.
- Responsive.

##  Logic:
##### Request Parameters & URL:
- The items API lives at [https://www.bodega.ai/api/items](https://www.bodega.ai/api/items).
- It takes in the following parameters:

| Parameter       | Effect |
| --------------- | ------ |
| search          | Limits the results to items with names that match `search`. |
| authorization   | Takes a username and password to check if request is authorized by the API. |

##### These events trigger the request:
- Three letters have been typed into the input field.

##### The server returns back:
- All matches to the search query.
- If there are no matches, a 'No Results' message is displayed.

## Running Locally:
1. `git clone https://github.com/BeccaSheldon/react-autocomplete.git`
2. `cd react-autocomplete`
3. `yarn start`

## Screenshots:

#
####  Thanks for taking the time to check out this repo and README!
#