
import Circle from "./Circle";


const OptionsPanel = ({ setChoice,options,isAdvanced,setIsAdvanced}) => {
  
  const length=isAdvanced?4:2;

  const handleChoice=(c)=>{
    setChoice(c);
  }
  

  return (
    <main className={`w-full max-h-[430px] max-w-3xl relative ${!isAdvanced?'bg-img trio-grid':'bg-poly poly-grid'} mt-1`}>
      
        {options.map((op,i)=> {if(i>length){return null}else{return <Circle isAdvanced={isAdvanced} option={op} id={op.id} key={op.id} handleChoice={()=>handleChoice(op.option)} />}})}

          
    </main>
  );
};

export default OptionsPanel;
