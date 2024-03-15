import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import {useState} from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Dialog open={isOpen}>
                <DialogContent>
                    This is a dialog
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
        </>
    );
}

export default App;
