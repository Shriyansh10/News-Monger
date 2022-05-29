import React, { Component } from 'react'
import NewsItem from './NewsItem'
import LoadingGif from './LoadingGif'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export default class News extends Component {
    
    constructor(props){
        super(props);
        // console.log("this is a constructor");
        this.state={
            articles : [],
            loading: false,
            page: 0,
            totalResults: 0
        }
        document.title = `${this.capitalize(this.props.category)} - NewsMonger`
    }

    static defaultProps = {
        category: "business",
    }

    static propTypes = {
        category: PropTypes.string
    }

    capitalize = (string)=>{
        return string[0].toUpperCase()+string.slice(1)
    }

    async componentDidMount(){
            this.updateNews();
        }
            
    async updateNews(){
        this.props.setProgress(10);
        const url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&language=en&category=${this.props.category}&page=${this.state.page}`;
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(40)
        let parsedData = await data.json();
        this.props.setProgress(70)

        this.setState({
            articles: parsedData.results,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    fetchMoreData = async() => {
        // this.setState({page: this.state.page+1})
        // console.log(this.state.page)
        const url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&language=en&category=${this.props.category}&page=${this.state.page+1}`;
        // this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.results),
            loading: false,
            page: this.state.page+1
        })
    };

    handleNextButton = async()=>{
        await this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    handlePrevButton= async()=>{
        await this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    render() {
         return (
            <>
                <h2><div className="text-center my-3">NewsMonger - {this.capitalize(this.props.category)} Headlines</div></h2>
                {this.state.loading && <LoadingGif/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<LoadingGif/>}
                >
                    <div className="container my-3">
                    <div className="row">
                    {this.state.articles.map((element,index)=>{
                        return <div className="col-md-4" key={index}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.image_url} url= {element.link} date={element.pubDate} creator={element.creator} source= {element.source_id}/>
                        </div>
                    })}
                    </div>       
                    </div>
                </InfiniteScroll>
            </> 
    )
  }
}
