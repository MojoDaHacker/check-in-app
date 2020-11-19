import React, {useContext} from 'react'
import StoreContext from "../contexts/store.js";


const authorizeUser = ({user, pwd}) => {
  const storeContext = useContext(StoreContext)

  for (const obj of storeContext.users){
    console.log(obj)
  }
}

export default authorizeUser