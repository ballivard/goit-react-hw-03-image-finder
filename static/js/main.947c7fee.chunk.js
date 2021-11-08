(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),o=a.n(c),s=(a(29),a(13)),i=a(3),l=a(4),u=a(6),h=a(5),g=(a(30),a(12)),d=a.n(g),m=a(22),p=a(23),j=a.n(p),b={currentPage:1,searchQuery:"",method:"get",per_page:12,baseURL:"https://pixabay.com/api/",params:"&image_type=photo",API_KEY:"23250998-48dbeb0708fc3f5b568666898"},f=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,r,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentPage,r=t.searchQuery,n=b.API_KEY,c=b.params,e.next=4,j.a.get("?key=".concat(n,"&q=").concat(r,"&").concat(c,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12"),b).then((function(e){return e.data.hits}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={fetchImages:f},O=a(0),v=function(e){var t=e.children;return Object(O.jsx)("div",{children:t})},L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(O.jsx)("header",{className:"Searchbar",children:Object(O.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(O.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{onChange:this.handleChange,className:"SearchForm-input",value:e,type:"text",autoComplete:"off",placeholder:"Search images and photos"})]})})}}]),a}(r.PureComponent),k=L,w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t){"IMG"===t.target.nodeName&&(e.setState({largeImageURL:t.target.dataset.large}),e.props.handleLargeURLImage(t.target.dataset.large))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.webformatURL,r=e.largeImageURL,n=e.tags;return Object(O.jsx)("li",{className:"GalleryItem",onClick:this.handleClick,children:Object(O.jsx)("img",{id:t,src:a,alt:n,className:"GalleryItem-image",onClick:this.handleClick,"data-large":r})},a)}}]),a}(r.PureComponent),C=w,x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(e){console.log("gallery click")},e.handleLargeURLImage=function(t){e.props.handleLargeURLImage(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images;return Object(O.jsx)("ul",{className:"ImageGallery",id:"imagesList",children:t.map((function(t){var a=t.id,r=t.webformatURL,n=t.largeImageURL,c=t.tags,o=t.user;return Object(O.jsx)(C,{onClick:e.handleClick,webformatURL:r,largeImageURL:n,tag:c,handleLargeURLImage:e.handleLargeURLImage},"".concat(a).concat(o))}))})}}]),a}(r.Component),I=x,S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={hasError:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("button",{className:"ButtonWrapper",onClick:this.props.onClick,children:"Load more"})}}]),a}(r.PureComponent),U=S,R=document.querySelector("#modal"),P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(c.createPortal)(Object(O.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(O.jsxs)("div",{className:"Modal",children:[this.props.children,Object(O.jsx)("img",{src:e,alt:"No available"})]})}),R)}}]),a}(r.PureComponent),N=P,Q=a(24),M=a.n(Q),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(a,[{key:"render",value:function(){return this.state.hasError?Object(O.jsx)("h1",{children:"Something went wrong."}):Object(O.jsx)("div",{className:"LoaderWrapper",children:Object(O.jsx)(M.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}}]),a}(r.PureComponent),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],searchQuery:"",largeImageURL:"",filter:"",isLoading:!1,error:null,showModal:!1,currentPage:1},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[]})},e.fetchImages=function(){var t=e.state,a=t.currentPage,r=t.searchQuery;e.setState({isLoading:!0});var n={searchQuery:r,currentPage:a};y.fetchImages(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1,error:""}}))})).catch((function(e){return console.log(e)})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e.handleLargeURLImage=function(t){e.setState({largeImageURL:t}),e.setState({showModal:!0})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,r=e.largeImageURL,n=e.isLoading;return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(v,{children:[a&&Object(O.jsx)(N,{onClose:this.toggleModal,largeImageURL:r}),Object(O.jsx)(k,{onSubmit:this.onChangeQuery,searchQuery:this.searchQuery}),t.length>0&&Object(O.jsx)(I,{images:t,handleLargeURLImage:this.handleLargeURLImage}),n?Object(O.jsx)(E,{}):t.length>0&&Object(O.jsx)(U,{onClick:this.fetchImages})]})})}}]),a}(r.Component),D=A;o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.947c7fee.chunk.js.map