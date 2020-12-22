
function Clock() {
  
  /* // TODO
  React.useEffect(() => {                           React.useEffect 與生命週期有關  
    console.log('componentDidMount')                Component 被建立的時候
    return () => {                                  Component 死亡（執行）的時候
      console.log('componentWillUnmount');
    }
  }, []);
  // */
  React.useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}