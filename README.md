# webgo

# structure
## brief
* When a request comes in, it is dispatched to different controller based on routing
* A controller returns ModelAndView, which tells which view to use and the model passed to the view
* A view resolver find the real view based on the view name.

# Directories
```text
|
+-- controllers
|
+-- views
|
+-- lib

```