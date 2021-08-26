(this["webpackJsonpreact-shoping"]=this["webpackJsonpreact-shoping"]||[]).push([[0],{31:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r.n(c),i=r(9),n=r.n(i),a=(r(31),r(2)),o=r(3),d=r(6),l=r(5);function j(e){return"$"+Number(parseFloat(e).toFixed(1)).toLocaleString()+" "}var u=r(10),h=r.n(u),p=r(12),b=r.n(p),O=r(13),m=r.n(O),x=r(4),v=r(19),f=r.n(v),g=r(25),y="FETCH_PRODUCTS",N="ADD_TO_CART",C="REMOVE_FROM_CART",I="ORDER_PRODUCTS_BY_SIZE",S="SORT_PRODUCTS_BY_PRICE",R="CREATE_ORDER",E="CLEAR_ORDER",k="CLEAR_CART",_=r(7),P=r(0),A=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var c;return Object(a.a)(this,r),(c=t.call(this,e)).closeModal=function(){c.setState({product:null})},c.openModal=function(e){c.setState({product:e})},c.state={product:null},c}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this,t=this.state.product?JSON.parse(this.state.product.availableSizes):[];return Object(P.jsxs)("div",{children:[this.props.products?Object(P.jsx)(h.a,{bottom:!0,cascade:!0,children:Object(P.jsx)("ul",{className:"products",children:this.props.products.map((function(t){return Object(P.jsx)("li",{children:Object(P.jsxs)("div",{className:"product",children:[Object(P.jsxs)("a",{href:"#"+t.id,onClick:function(){return e.openModal(t)},children:[Object(P.jsx)("img",{src:t.image,alt:t.title}),Object(P.jsx)("p",{children:t.title})]}),Object(P.jsxs)("div",{className:"product-price",children:[Object(P.jsx)("div",{children:j(t.price)}),Object(P.jsx)("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary",children:"Add to Cart"})]})]})},t.id)}))})}):Object(P.jsx)("div",{children:"Loading..."}),this.state.product&&Object(P.jsx)(m.a,{isOpen:!0,onRequestClose:this.closeModal,ariaHideApp:!1,children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)("div",{className:"close-btn",children:Object(P.jsx)("button",{className:"button close-modal",onClick:this.closeModal,children:"x"})}),Object(P.jsxs)("div",{className:"product-details",children:[Object(P.jsx)("img",{src:this.state.product.image,alt:this.state.product.title}),Object(P.jsxs)("div",{className:"product-details-description",children:[Object(P.jsx)("p",{children:Object(P.jsx)("strong",{children:this.state.product.title})}),Object(P.jsx)("p",{children:this.state.product.description}),Object(P.jsxs)("p",{children:["Available Sizes :"," ",t.map((function(e){return Object(P.jsxs)("span",{children:[" ",Object(P.jsx)("button",{className:"button",children:e})]})}))]}),Object(P.jsx)("p",{children:Object(P.jsxs)("div",{className:"product-price",children:[Object(P.jsx)("div",{children:j(this.state.product.price)}),Object(P.jsx)("button",{className:"button primary",onClick:function(){e.props.addToCart(e.state.product),e.closeModal()},children:"Add to Cart"})]})})]})]})]})})]})}}]),r}(c.Component),T=Object(x.b)((function(e){return{products:e.products.filteredItems}}),{fetchProducts:function(){return function(){var e=Object(g.a)(f.a.mark((function e(t){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shopping-react-backend.herokuapp.com/api/products");case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,t({type:y,payload:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addToCart:function(e){return function(t,r){var c=r().cart.cartItems.slice(),s=!1;c.forEach((function(t){t.id===e.id&&(s=!0,t.count++)})),s||c.push(Object(_.a)(Object(_.a)({},e),{},{count:1})),t({type:N,payload:c}),localStorage.setItem("cartItems",JSON.stringify(c))}}})(A),w=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return this.props.filteredProducts?Object(P.jsxs)("div",{className:"filter",children:[Object(P.jsxs)("div",{children:[this.props.filteredProducts.length," Products"]}),Object(P.jsxs)("div",{children:["Size :"," ",Object(P.jsxs)("select",{value:this.props.size,onChange:function(t){return e.props.filterProducts(e.props.products,t.target.value)},children:[Object(P.jsx)("option",{value:"",children:"ALL"}),Object(P.jsx)("option",{value:"XS",children:"XS"}),Object(P.jsx)("option",{value:"S",children:"S"}),Object(P.jsx)("option",{value:"M",children:"M"}),Object(P.jsx)("option",{value:"L",children:"L"}),Object(P.jsx)("option",{value:"XL",children:"XL"}),Object(P.jsx)("option",{value:"XXL",children:"XXL"})]})]}),Object(P.jsxs)("div",{children:["Order :"," ",Object(P.jsxs)("select",{value:this.props.sort,onChange:function(t){return e.props.sortProducts(e.props.filteredProducts,t.target.value)},children:[Object(P.jsx)("option",{value:"latest",children:"latest"}),Object(P.jsx)("option",{value:"lowest",children:"lowest"}),Object(P.jsx)("option",{value:"highest",children:"highest"})]})]})]}):Object(P.jsx)("div",{children:"Loading..."})}}]),r}(c.Component),L=Object(x.b)((function(e){return{products:e.products.items,filteredProducts:e.products.filteredItems,sort:e.products.sort,size:e.products.size}}),{filterProducts:function(e,t){return function(r){r({type:I,payload:{size:t,items:""===t?e:e.filter((function(e){return JSON.parse(e.availableSizes).indexOf(t)>=0}))}})}},sortProducts:function(e,t){return function(r){var c=e.slice();"latest"===t?c.sort((function(e,t){return e.id>t.id?1:-1})):"lowest"===t?c.sort((function(e,t){return e.price>t.price?1:-1})):c.sort((function(e,t){return e.price>t.price?-1:1})),r({type:S,payload:{sort:t,items:c}})}}})(w),D=r(14),M=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var c;return Object(a.a)(this,r),(c=t.call(this,e)).handleInput=function(e){c.setState(Object(D.a)({},e.target.name,e.target.value))},c.checkOrder=function(e){e.preventDefault();var t={name:c.state.name,email:c.state.email,address:c.state.address,cartItems:c.props.cartItems,total:c.props.cartItems.reduce((function(e,t){return e+t.price*t.count}),0)};c.props.createOrder(t)},c.closeModal=function(){c.setState({name:"",email:"",address:"",showForm:!1}),c.props.clearOrder()},c.state={name:"",email:"",address:"",showForm:!1},c}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(P.jsxs)("div",{children:[0===this.props.cartItems.length?Object(P.jsx)("div",{className:"cart cart-header",children:"Cart is Empty."}):Object(P.jsxs)("div",{className:"cart cart-header",children:["You have ",this.props.cartItems.length," in the cart."," "]}),this.props.order&&Object(P.jsx)(m.a,{isOpen:!0,ariaHideApp:!1,children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)("div",{className:"close-btn",children:Object(P.jsx)("button",{className:"close-modal",onClick:this.closeModal,children:"x"})}),Object(P.jsxs)("div",{className:"order-details",children:[Object(P.jsx)("h3",{className:"success-message",children:"YOUR ORDER HAS BEEN PLACED."}),Object(P.jsxs)("h2",{children:["order ",this.props.order.id]}),Object(P.jsxs)("ul",{children:[Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:"Name:"}),Object(P.jsx)("div",{children:this.props.order.name})]},"name"+this.props.order.id),Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:"Email:"}),Object(P.jsx)("div",{children:this.props.order.email})]},"email"+this.props.order.id),Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:"Address:"}),Object(P.jsx)("div",{children:this.props.order.address})]},"address"+this.props.order.id),Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:"Total:"}),Object(P.jsx)("div",{children:j(this.props.order.total)})]},"total"+this.props.order.id),Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:"Cart Items:"}),Object(P.jsx)("div",{children:JSON.parse(this.props.order.cartItems).map((function(e){return Object(P.jsxs)("div",{children:[e.count," x "," ",e.title]})}))})]},"items"+this.props.order.id)]})]})]})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"cart",children:Object(P.jsx)(h.a,{left:!0,cascade:!0,children:Object(P.jsx)("ul",{className:"cart-items",children:this.props.cartItems.map((function(t){return Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:t.image,alt:t.title})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{children:t.title}),Object(P.jsxs)("div",{className:"right",children:[j(t.price)," x ",t.count," ",Object(P.jsx)("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)},children:"Remove"})]})]})]},t.id)}))})})}),0!==this.props.cartItems.length&&Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"cart",children:Object(P.jsxs)("div",{className:"total",children:[Object(P.jsxs)("div",{children:["Total:"," ",j(this.props.cartItems.reduce((function(e,t){return e+t.price*t.count}),0))]}),Object(P.jsx)("button",{onClick:function(){return e.setState({showForm:!0})},className:"button primary",children:"Proceed"})]})}),this.state.showForm&&Object(P.jsx)(h.a,{right:!0,cascade:!0,children:Object(P.jsx)("div",{className:"cart",children:Object(P.jsx)("form",{onSubmit:this.checkOrder,children:Object(P.jsxs)("ul",{className:"form-container",children:[Object(P.jsxs)("li",{children:[Object(P.jsx)("label",{children:"Email"}),Object(P.jsx)("input",{type:"email",name:"email",required:!0,onChange:this.handleInput})]},"email"),Object(P.jsxs)("li",{children:[Object(P.jsx)("label",{children:"Name"}),Object(P.jsx)("input",{type:"text",name:"name",required:!0,onChange:this.handleInput})]},"name"),Object(P.jsxs)("li",{children:[Object(P.jsx)("label",{children:"Address"}),Object(P.jsx)("input",{type:"text",name:"address",required:!0,onChange:this.handleInput})]},"address"),Object(P.jsx)("li",{children:Object(P.jsx)("button",{className:"button primary",children:"Checkout"})},"checkout")]})})})})]})]})]})}}]),r}(c.Component),F=Object(x.b)((function(e){return{order:e.order.order,cartItems:e.cart.cartItems}}),{createOrder:function(e){return function(t){fetch("https://shopping-react-backend.herokuapp.com/api/order",{method:"POST",headers:{"Content-type":"applicaton/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t({type:R,payload:e}),localStorage.clear("cartItems"),t({type:k})}))}},clearOrder:function(){return function(e){e({type:E})}},removeFromCart:function(e){return function(t,r){var c=r().cart.cartItems.slice().filter((function(t){return t.id!==e.id}));t({type:C,payload:c}),localStorage.setItem("cartItems",JSON.stringify(c))}}})(M),z=r(11),X=r(26),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,U=Object(z.d)(Object(z.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{items:t.payload,filteredItems:t.payload};case I:return Object(_.a)(Object(_.a)({},e),{},{filteredItems:t.payload.items,size:t.payload.size});case S:return Object(_.a)(Object(_.a)({},e),{},{filteredItems:t.payload.items,sort:t.payload.sort});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:JSON.parse(localStorage.getItem("cartItems")||"[]")},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:case C:return{cartItems:t.payload};case k:return{cartItems:[]};default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{order:t.payload};case E:return{order:null};default:return e}}}),{},J(Object(z.a)(X.a))),q=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(P.jsx)(x.a,{store:U,children:Object(P.jsxs)("div",{className:"grid-container",children:[Object(P.jsx)("header",{children:Object(P.jsx)("a",{href:"/",children:"React shoping Cart"})}),Object(P.jsx)("main",{children:Object(P.jsxs)("div",{className:"content",children:[Object(P.jsxs)("div",{className:"main",children:[Object(P.jsx)(L,{}),Object(P.jsx)(T,{})]}),Object(P.jsx)("div",{className:"sidebar",children:Object(P.jsx)(F,{})})]})}),Object(P.jsx)("footer",{children:"All rights Reserved."})]})})}}]),r}(s.a.Component);n.a.render(Object(P.jsx)(s.a.Fragment,{children:Object(P.jsx)(q,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8dfc8b6b.chunk.js.map