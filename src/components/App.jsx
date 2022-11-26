import React from 'react';
import { AppBar } from './AppBar/AppBar';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/operations"


export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <AppBar />
  )
}



