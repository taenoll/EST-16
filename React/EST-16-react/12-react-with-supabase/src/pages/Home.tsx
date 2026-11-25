import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import S from './Home.module.css';


function Home() {


  const textRef = useRef<HTMLDivElement>(null);


  // useEffect(()=>{
    // gsap.fromTo(textRef.current!.children,{
    //   y:50,
    //   opacity:0,
    // },{
    //   y:0,
    //   opacity:1,
    //   stagger:0.2,
    //   duration:1,
    //   ease:'Power3.easeInOut'
    // })

  //   const ctx = gsap.context(()=>{
  //     gsap.fromTo(textRef.current!.children,{
  //       y:50,
  //       opacity:0,
  //     },{
  //       y:0,
  //       opacity:1,
  //       stagger:0.2,
  //       duration:1,
  //       ease:'Power3.easeInOut'
  //     })
  //   })
  //   return () => ctx.revert();
  // },[])

  // unmount 될 때 알아서 revert 해준다, 한 번만 실행, StrictMode에서 1회 실행 
  
  useGSAP(()=>{
    gsap.fromTo('h2, span',{
      y:50,
      opacity:0,
    },{
      y:0,
      opacity:1,
      stagger:0.2,
      duration:1,
      ease:'Power3.easeInOut'
    })
  }, {scope: textRef})
  

  return (
    <div className={S.container}>
      <div ref={textRef}>
        <h2>
          <strong> 뭐 해먹구 살지... </strong>
          <span> 모에모에큥이요? </span>
        </h2>
      </div>
      <img src="https://images.mypetlife.co.kr/content/uploads/2019/09/09152948/cat-baby-4208578_1920.jpg" alt="" />
    </div>
  )

}
export default Home
