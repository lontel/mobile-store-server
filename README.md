# mobile-store-server

|  URL path  |  HTTP Method  |  RESPONSE (200)| ACTION   |
| :--------- |:-------------:| -------------: |----------|
Auth Routes
`/api/auth/signup`|POST|{user}|Create a new user
`/api/auth/login`|POST|{myProfile}|Join in session
`/api/auth/logout`|POST|Logout|Logout
`/api/auth/verify`|GET|{Validated user data}|Validated user data
User Routes
`/api/user/update/:user_id`|PUT|{user}|Submit user data changes
`/api/user/delete/:user_id`|DELETE|Delete a specific user|Delete a specific user
`/api/user/myprofile/:account_id`|GET|{profile info}|Get my profile info
Item Routes
`/api/item/list` | GET | [All items] |Get all items from DB
`/api/item/details/:item_id`|GET|{itemData}|Render specific item(details)
`/api/item/save`|POST|{itemData}|Save a new item data 
`/api/item/update/:item_id`|PUT|{itemData}|Edit item
`/api/item/delete/:item_id`|DELETE|Delete a specific item data|Delete a specific item data
`/api/item/getFilteredItem`|GET|[Filtered items]|Get al filtered items
Favorites Routes
`/api/favorites/list` | GET | [All favorite items] |Get all favorite items 
`/api/favorites/add-item/:item_id`|PUT|Add item to favorites list|Add item to favorites list
`/api/favorites/remove-item/:item_id`|PUT|Remove item from favorites list|Remove item from favorites list
Cart Routes
`/api/cart/list`|GET|[Al items in cart]|Al items in cart
`/api/cart/add-item/:item_id`|PUT|Add item to cart|Add item to cart
`/api/cart/remove-item/:item_id`|PUT|Remove item from cart|Remove item from cart
Stripe Routes
`/api/stripe/checkout`|POST|Payment gateway
Upload
`/api/image`|POST|Upload images