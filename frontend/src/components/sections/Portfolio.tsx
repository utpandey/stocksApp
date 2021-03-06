import React,{FC} from 'react'
import { IUsers,IUserData } from '../types/type';
import { useSelector } from 'react-redux';
// import { ReducerState } from '../../store/reducers/listReducer';
import ListItem from './ListItem';
import { IList } from '../types/type';

interface IPortfolioProps {
  users: IUsers;
  user: IUserData;
}

const Portfolio: FC<IPortfolioProps> = ({ user }) => {
  const listItem = useSelector((state: any) => state.list);
  console.log(listItem);
  // const [listState, setState] = useState(listItem);
  // return (
  //   <>asdsad</>
  // )
  // console.log('sadsad'+ listState.length)
  return (
    <>
      {listItem.length > 0 ? 
        <div className="pf__cont">
        <div className="pf__cont__secA">
          <h1> {user.firstName}, Welcome to StockFolio!</h1>
        </div>
          <div className="pf__cont__secB">
            {listItem.map((list: IList, key: number) => <ListItem list={list} symbol={list.symbol} key={key}/>
        )}
        </div>
        </div>
        :
        <div className="pf__cont">
          <div className="pf__cont__secA">
            <h1> {user.firstName}, Welcome to StockFolio!</h1>
          </div>
          <div className="pf__cont__secB">
              <span>
                  You do not own any stocks on our
                  platform. To start your portfolio add upto 10 stocks according 
                  to your interest!
              </span>
          </div>
        </div>
      }
    </>
  );
}

export default Portfolio;