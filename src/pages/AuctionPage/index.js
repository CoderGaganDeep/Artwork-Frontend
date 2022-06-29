import React from "react";
import { useSelector } from "react-redux";
import { Auction } from "../../components/Auction";
import { selectToken, selectUser } from "../../store/user/selectors";

export default function AuctionPage() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div>
      {/* works only if user is logged in as artist*/}
      {!token || !user || !user.isArtist ? "" : <Auction />}
    </div>
  );
}
