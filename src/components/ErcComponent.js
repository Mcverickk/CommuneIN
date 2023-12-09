
import Image from 'next/image';
import '../styles/nft.css';
import Time from './product/Time';

export const ErcComponent=(props)=>{

    return(
        <div className="mainErc w-100">
        <div className="contentErc w-100">
          <Image src={props.pic} alt='Erc20 logo'
          width={60}
          height={30}
          className="imageErc"
          />
          <div className="otherContentErc">
          <div className="titleErc font-bolder font-0 title">{props.name}</div>
          <div className="descErc font-14">{props.info} </div>
          <span className=''>{`Supply: ${props.sold}  ${props.totalSupply}`}</span>
          </div>
        </div>
        <div className="footerSec w-100">
            <span className="font-light basketSize">Basket Size: ${props.basketSize}</span>
            <Time content={props.timeLeft} />

        </div>
        <button disabled={props.disabled} className={props.disabled ? "inactivebutton" : "button"} style={{
          marginTop:'30px'
        }}>Buy</button>


      </div>
    )
}