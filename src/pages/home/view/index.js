import React from 'react'

export default  function HomeView({setLanguage, language}) {
return (<button onClick={()=>setLanguage('en-us')}>HOME = {language}</button>)
}
