import React from "react"
import "./Content.css"




const Content = () => {
    return (
        <div className="content">
            <ContentFirst/>
            <ContentSecond/>
        </div>
    )
}



const ContentFirst = () => {
    return (
        <div className="contentFirst">
            <img width="500px%" src="https://i.imgur.com/G7VPh5e.jpg"/>
            <div className="txt">
                <h1>Sed ut perspiciatis unde omnis</h1>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                 Neque porro quisquam est, qui dolorem.</p>
            </div>
        </div>
    )
}


const ContentSecond = () => {
  return (
      <div className="contentSecond">
          <div>
              <h1>Sed ut perspiciatis unde omnis</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
               Neque porro quisquam est, qui dolorem.</p>
          </div>
          <img width="500px" src="https://st3.depositphotos.com/30226412/33315/v/600/depositphotos_333158022-stock-illustration-initial-letter-gc-or-cg.jpg"/>
      </div>
  )
}

export default Content