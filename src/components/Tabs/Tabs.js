import React ,{ useState} from 'react'
import TabsItem from '../TabsItem/TabsItem';
import TableComponent from '../Table/Table';
import "./Tabs.css";
const Tabs = ({tabItems}) => {
    const [active, setActive] = useState(1);
     return (
       <div className="wrapper">
         <div className="tabs">
           {tabItems && tabItems.map(({ id, title }) =>
           <TabsItem
              key={title}
              title={title}
              onItemClicked={() => setActive(id)}
              isActive={active === id}
            />
         )}
         </div>
         <div className="content">
           {tabItems && tabItems.map(({ id, title, content }) => {
               let contentResult;
               if(id === 2) {
                contentResult = <TableComponent Rows={content} />;
               } else {
                contentResult = <div dangerouslySetInnerHTML={{__html: content}} />;
               }
                return active === id ? (<div key={title}> {contentResult} </div>): ''
           })}
         </div>
        </div>
     )
   }
export default Tabs;