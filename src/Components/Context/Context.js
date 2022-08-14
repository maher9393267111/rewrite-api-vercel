import React, { useContext, useState } from 'react';

const LoggedInContext = React.createContext()
const UpdateLoggedInContext = React.createContext()
const UserIdContext = React.createContext()
const UpdateLoggedOutContext = React.createContext()
const UpdateUserIdContext = React.createContext()
const FilterProjectContext = React.createContext()
const UpdateFilterProjectContext = React.createContext()


export function useContextLoggedIn() {
  return useContext(LoggedInContext)
}

export function useContextUpdateLoggedIn() {
  return useContext(UpdateLoggedInContext)
}

export function useContextUpdateLoggedOut() {
  return useContext(UpdateLoggedOutContext)
}

export function useContextUserId() {
  return useContext(UserIdContext)
}

export function useContextUpdateUserId() {
  return useContext(UpdateUserIdContext)
}

export function useFilterProjectContext() {
  return useContext(FilterProjectContext)
}

export function useUpdateFilterProjectContext() {
  return useContext(UpdateFilterProjectContext)
}

export function ContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')
  const [filterProject, setFilterProject] = useState('')

  function updateLoggedIn() {
    setLoggedIn(true)
  }

  function updateLoggedOut() {
    setLoggedIn(false)
  }

  function updateUserId(id) {
    setUserId(id)
  }

  function updateFilterProject(project) {
    setFilterProject(filterProject)
  }

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <UpdateLoggedInContext.Provider value={updateLoggedIn}>
        <UpdateLoggedOutContext.Provider value={updateLoggedOut}>
          <UserIdContext.Provider value={userId}>
            <UpdateUserIdContext.Provider value={updateUserId}>
              <FilterProjectContext.Provider value={filterProject}>
                <UpdateFilterProjectContext.Provider value={updateFilterProject}>
                  {children}
                </UpdateFilterProjectContext.Provider>
              </FilterProjectContext.Provider>
            </UpdateUserIdContext.Provider>
          </UserIdContext.Provider>
        </UpdateLoggedOutContext.Provider>
      </UpdateLoggedInContext.Provider>
    </LoggedInContext.Provider>
  )
}