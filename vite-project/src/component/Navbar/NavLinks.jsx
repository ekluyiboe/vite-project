import React from 'react'
import { Link } from 'react-router-dom'



const NavLinks = () => {
    const links =[ 
      { name: "Features", submenu: true, sublinks:[
        {
        sublink:[
          {name:'Todo List',link:"/"},
          {name:'Calendar',link:"/"},
          {name:'Reminders',link:"/"},
          {name:'Planning',link:"/"},
          
        ],
      },
     ],
    }, 
      { name: "Company", submenu: true, sublinks:[
        {
        sublink:[
          {name:'T-shirt',link:"/"},
          {name:'T-shirt',link:"/"},
          {name:'T-shirt',link:"/"},
          
        ],
      },
     ],
    }, 
     { name: "Careers" }, { name: "About" }];
  return (
    <>
    {links.map((link) => (
        <div>
            <div className='px-3 text-left md:cursor-pointer group hover:text-stone-900'>
                <h1>
                  {link.name}
                  <span className='text-xl md:mt-1 md:ml-2 inline '>
                  <ion-icon
                  name={`${
                    links == link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
                  </span>
                </h1>
                {link.submenu &&(
                <div>
                  <div className='absolute top-19.5 hidden group-hover:block hover:block '>
                    <div className='py-0'>
                      <div></div>
                    </div>
                      <div className='bg-slate-50 p-3.5 grid grid-cols-2 gap-2 rounded-lg shadow-2xl'>
                        {
                          link.sublinks.map((mysublinks)=>(

                        
                            <div>
                              {mysublinks.sublink.map(slink=>(
                                <li className='text-sm text-gray-900 my-2.5'>
                                  <Link to={slink.link}>{slink.name}</Link>
                                </li>
                              ))}
                            </div>
                          ))
                        }
                      </div>
                  </div>
                </div> 
                )}
            </div>
        </div>
    ))}
    </>
  );
};

export default NavLinks