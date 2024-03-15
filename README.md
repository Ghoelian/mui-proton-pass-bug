This project demonstrates a bug I ran into using a combination of Material UI and Proton Pass.

As soon as a dialog opens while the Proton Pass Firefox extension is active, mui throws the following exception:
`Permission denied to access property "getAttribute"`

This also happens on the mui docs page, when I try to open the flyout menu. Here, I get the exception `Application error: a client-side exception has occurred (see the browser console for more information).`

The browser console shows the same exception as above.
