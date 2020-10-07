(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[54],{315:function(e,a,t){"use strict";var n,i=t(4),r=t(7),l=t(9),c=t(6),o=t.n(c),s=t(264),m=t(281),u=t(0),d=t.n(u),h=t(285),p=t(277),E=t(282),g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var f=((n={})[h.c]="collapse",n[h.d]="collapsing",n[h.b]="collapsing",n[h.a]="collapse show",n),b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],n=g[e];return t+parseInt(Object(s.a)(a,n[0]),10)+parseInt(Object(s.a)(a,n[1]),10)}},y=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){e.style[a.getDimension()]="0"},a.handleEntering=function(e){var t=a.getDimension();e.style[t]=a._getScrollDimensionValue(e,t)},a.handleEntered=function(e){e.style[a.getDimension()]=null},a.handleExit=function(e){var t=a.getDimension();e.style[t]=a.props.getDimensionValue(t,e)+"px",Object(E.a)(e)},a.handleExiting=function(e){e.style[a.getDimension()]=null},a}Object(l.a)(a,e);var t=a.prototype;return t.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},t._getScrollDimensionValue=function(e,a){return e["scroll"+a[0].toUpperCase()+a.slice(1)]+"px"},t.render=function(){var e=this,a=this.props,t=a.onEnter,n=a.onEntering,l=a.onEntered,c=a.onExit,s=a.onExiting,u=a.className,E=a.children,g=Object(r.a)(a,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete g.dimension,delete g.getDimensionValue;var b=Object(p.a)(this.handleEnter,t),y=Object(p.a)(this.handleEntering,n),v=Object(p.a)(this.handleEntered,l),x=Object(p.a)(this.handleExit,c),N=Object(p.a)(this.handleExiting,s);return d.a.createElement(h.e,Object(i.a)({addEndListener:m.a},g,{"aria-expanded":g.role?g.in:null,onEnter:b,onEntering:y,onEntered:v,onExit:x,onExiting:N}),(function(a,t){return d.a.cloneElement(E,Object(i.a)({},t,{className:o()(u,E.props.className,f[a],"width"===e.getDimension()&&"width")}))}))},a}(d.a.Component);y.defaultProps=b,a.a=y},568:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(973),l=t(728),c=t(950),o=t(482),s=t(315),m=t(58),u=t(223);class d extends n.Component{constructor(...e){super(...e),this.state={isBasic:!1,isMultiTarget:[],accordionKey:1},this.targetHandler=e=>{this.state.isMultiTarget.some(a=>a===e)?this.setState(a=>({isMultiTarget:a.isMultiTarget.filter(a=>a!==e)})):this.setState(a=>({isMultiTarget:[...a.isMultiTarget,e]}))},this.multiTargetHandler=()=>{["target1","target2"].map(e=>(this.targetHandler(e),!1))}}render(){const e=this.state,a=e.isBasic,t=e.isMultiTarget,n=e.accordionKey;return i.a.createElement(m.a,null,i.a.createElement(r.a,null,i.a.createElement(l.a,{sm:12},i.a.createElement("h5",null,"Basic Collapse"),i.a.createElement("hr",null),i.a.createElement(c.a,null,i.a.createElement(c.a.Header,null,i.a.createElement(o.a,{href:u.a.BLANK_LINK,onClick:()=>this.setState({isBasic:!a}),"aria-controls":"basic-collapse","aria-expanded":a},"Collapse Link"),i.a.createElement(o.a,{onClick:()=>this.setState({isBasic:!a})},"Collapse Button")),i.a.createElement(s.a,{in:this.state.isBasic},i.a.createElement("div",{id:"basic-collapse"},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))),i.a.createElement(l.a,{sm:12},i.a.createElement("h5",null,"Multiple Targets"),i.a.createElement("hr",null),i.a.createElement(o.a,{onClick:()=>this.targetHandler("target1"),"aria-controls":"target1","aria-expanded":t.some(e=>"target1"===e)},"Toggle first element"),i.a.createElement(o.a,{onClick:()=>this.targetHandler("target2"),"aria-controls":"target2","aria-expanded":t.some(e=>"target2"===e)},"Toggle second element"),i.a.createElement(o.a,{onClick:this.multiTargetHandler},"Toggle both elements"),i.a.createElement(r.a,null,i.a.createElement(l.a,null,i.a.createElement(c.a,{className:"mt-2"},i.a.createElement(s.a,{in:t.some(e=>"target1"===e)},i.a.createElement("div",{id:"target1"},i.a.createElement(c.a.Header,{as:"h5"},"First Element"),i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))),i.a.createElement(l.a,null,i.a.createElement(c.a,{className:"mt-2"},i.a.createElement(s.a,{in:t.some(e=>"target2"===e)},i.a.createElement("div",{id:"target2"},i.a.createElement(c.a.Header,{as:"h5"},"Second Element"),i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))))),i.a.createElement(l.a,{sm:12,className:"accordion"},i.a.createElement("h5",null,"Accordion Example"),i.a.createElement("hr",null),i.a.createElement(c.a,{className:"mt-2"},i.a.createElement(c.a.Header,null,i.a.createElement(c.a.Title,{as:"h5"},i.a.createElement("a",{href:u.a.BLANK_LINK,onClick:()=>this.setState({accordionKey:1!==n?1:0}),"aria-controls":"accordion1","aria-expanded":1===n},"Collapsible Group Item #1"))),i.a.createElement(s.a,{in:1===this.state.accordionKey},i.a.createElement("div",{id:"accordion1"},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))))),i.a.createElement(c.a,{className:"mt-2"},i.a.createElement(c.a.Header,null,i.a.createElement(c.a.Title,{as:"h5"},i.a.createElement("a",{href:u.a.BLANK_LINK,onClick:()=>this.setState({accordionKey:2!==n?2:0}),"aria-controls":"accordion2","aria-expanded":2===n},"Collapsible Group Item #2"))),i.a.createElement(s.a,{in:2===this.state.accordionKey},i.a.createElement("div",{id:"accordion2"},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))))),i.a.createElement(c.a,{className:"mt-2"},i.a.createElement(c.a.Header,null,i.a.createElement(c.a.Title,{as:"h5"},i.a.createElement("a",{href:u.a.BLANK_LINK,onClick:()=>this.setState({accordionKey:3!==n?3:0}),"aria-controls":"accordion3","aria-expanded":3===n},"Collapsible Group Item #3"))),i.a.createElement(s.a,{in:3===this.state.accordionKey},i.a.createElement("div",{id:"accordion3"},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Text,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))))))))}}a.default=d}}]);
//# sourceMappingURL=54.4632eaaf.chunk.js.map