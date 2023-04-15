<h1>flexiQS - Make your own interface!</h1>

With this extension you can:
<ul>
  <li>Hide unwanted buttons from Qlik Interface</li>
  <li>Hide document bar for more data visualization space</li>
  <li>Hide sheet title</li>
  <li>Change colors from the bars and selections</li>
  <li>Create a sheet bar to navigation (and change your color, of course!)</li>
 </ul>
 
 <h2>Do i need to be a super programmer to use it?</h2>
 You need to write <strong>zero</strong> lines to use this extension. All configurations can be done on the extension's interface.
 
 <h2>How it works?</h2>
 First thing you need: put the extension on your sheet. The chosen style and hidden buttons/bars will be applied just on that sheet.<br>
 We recommend you configure the layout on a base sheet and then copy that configuration to anothers. But you can have one style for each sheet if wanted!
 
 <h2>How to use the navigation bar</h2>
 You need to create a table on your script containing three dimensions and add them on Dimensions section. Like this:
 
 ![menu](https://user-images.githubusercontent.com/130483457/232045466-e04145b5-1338-4db4-8840-e236d0789afb.PNG)

 
 <ul>
 <li>Order</li>
  <ul><li>This will be used to sort the buttons on your navigation bar. You don't need to use the same order of your sheets. You can just use RowNo() on that dimension, if you prefer. </li></ul>
 <li>Sheet Title</li>

  <ul><li>The name that will appears on the navigation bar (don't need to be the sheet name)</li></ul>
 <li>Sheet ID</li>
  <ul><li>You can find this information on the URL, like indicate on image:</li></ul>
</ul>

![id](https://user-images.githubusercontent.com/130483457/232044505-ebc84f38-1d2f-4f8b-8001-9b01251e3307.png)
 
 The table will be something like this:
    
 NavigationBarTable: <br>
 LOAD * INLINE [ <br>
 Order, Title, ID <br>
 1, Home, 6cc87204-56e9-4b99-bb78-fa9506a624c9 <br>
 2, Sales, fa9506a624c9-56e9-4b99-bb78-fa9506a624c9 <br>
 3, Comercial, fa9506a624c9-fa9506a624c9-4b99-bb78-fa9506a624c9 <br>
 4, Clients, 4ba2c08a-0df5-4700-bb2f-7ecc9b07e365 <br>
 5, Credit Card, 7ab75f00-fef4-44f2-aa83-9b9c3f1cf8f0 <br>
 ]; <br>
 
 

https://user-images.githubusercontent.com/130483457/232190001-6f3b16cf-70fd-412d-97b9-8c7600d1819c.mp4



