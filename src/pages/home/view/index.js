import React from 'react'

export default  function HomeView({setLanguage, language, envTest}) {
return (<button onClick={()=>setLanguage('en-us')}>HOME - {language}  - {envTest}</button>)
}
