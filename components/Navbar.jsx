// "use client";
// import "@styles/Navbar.scss";
// import { Menu, Person, Search, ShoppingCart } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { RiAdminFill } from "react-icons/ri";


// const Navbar = () => {
//   const { data: session } = useSession();
//   const user = session?.user;

//   const [dropdownMenu, setDropdownMenu] = useState(false);

//   const handleLogout = async () => {
//     signOut({ callbackUrl: "/login" });
//   };

//   const [query, setQuery] = useState("");

//   const router = useRouter();
//   const searchWork = async () => {
//     router.push(`/search/${query}`);
//   };

//   const cart = user?.cart;
  

//   return (
//     <div className="navbar">
//       <a href="/">
//         <img src="/assets/logo.png" alt="logo" />
//       </a>

//       <div className="navbar_search">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <IconButton disabled={query === ""}>
//           <Search sx={{ color: "red" }} onClick={searchWork} />
//         </IconButton>
//       </div>

    

//       <div className="navbar_right">
//         {user && (
//           <a href="/cart" className="cart">
//             <ShoppingCart sx={{ color: "gray" }} />
//             Cart <span>({cart?.length})</span>
//           </a>
//         )}
//         <button
//           className="navbar_right_account"
//           onClick={() => setDropdownMenu(!dropdownMenu)}
//         >
//           <Menu sx={{ color: "gray" }} />
//           {!user ? (
//             <Person sx={{ color: "gray" }} />
//           ) : (
//             <img
//               src={user.profileImagePath}
//               alt="profile"
//               style={{ objectFit: "cover", borderRadius: "50%" }}
//             />
//           )}
//         </button>

//         {dropdownMenu && !user && (
//           <div className="navbar_right_accountmenu">
//             <Link href="/login">Log In</Link>
//             <Link href="/register">Sign Up</Link>
//           </div>
//         )}

//         {dropdownMenu && user && (
//           <div className="navbar_right_accountmenu">
//             <Link href="/wishlist">Wishlist</Link>
//             <Link href="/cart">Cart</Link>
//             <Link href="/order">Orders</Link>
//             <Link href={`/shop?id=${user._id}`}>Your Shop</Link>
//             <Link href="/create-work">Sell Your Work</Link>
//             <a onClick={handleLogout}>Log Out</a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import "@styles/Navbar.scss";
import { Menu, Person, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [adminDialogOpen, setAdminDialogOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");

  const handleLogout = async () => {
    signOut({ callbackUrl: "/login" });
  };

  const [query, setQuery] = useState("");

  const router = useRouter();
  const searchWork = async () => {
    router.push(`/search/${query}`);
  };

  const handleAdminLogin = () => {
    if (adminUsername === "admin" && adminPassword === "admin123") {
      router.push("/admin");
      setAdminDialogOpen(false);
    } else {
      setAdminError("Invalid admin credentials");
    }
  };

  const cart = user?.cart;

  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton disabled={query === ""}>
          <Search sx={{ color: "red" }} onClick={searchWork} />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user && (
          <a href="/cart" className="cart">
            <ShoppingCart sx={{ color: "gray" }} />
            Cart <span>({cart?.length})</span>
          </a>
        )}
        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: "gray" }} />
          {!user ? (
            <Person sx={{ color: "gray" }} />
          ) : (
            <img
              src={user.profileImagePath}
              alt="profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link href="/login">Log In</Link>
            <Link href="/register">Sign Up</Link>
            <Button onClick={() => setAdminDialogOpen(true)} >
              {/* <RiAdminFill style={{ marginRight: '5px' }} /> */}
              Admin 
            </Button>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/order">Orders</Link>
            <Link href={`/shop?id=${user._id}`}>Your Shop</Link>
            <Link href="/create-work">Sell Your Work</Link>
            <a onClick={handleLogout}>Log Out</a>
          </div>
        )}
      </div>

      <Dialog open={adminDialogOpen} onClose={() => setAdminDialogOpen(false)}>
        <DialogTitle>Admin Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your admin username and password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          {adminError && <p style={{ color: "red" }}>{adminError}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAdminDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAdminLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Navbar;
