"use strict";(self.webpackChunkwebpackWcBlocksStylingJsonp=self.webpackChunkwebpackWcBlocksStylingJsonp||[]).push([[4654],{32721:(e,t,s)=>{s.d(t,{w:()=>o});var n=s(47594),a=s(47143),c=s(82973),r=s(95171);const o=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:s,isAfterProcessing:o,isComplete:i,hasError:l}=(0,a.useSelect)((e=>{const t=e(n.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}})),{activePaymentMethod:d,isExpressPaymentMethodActive:m}=(0,a.useSelect)((e=>{const t=e(n.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}})),{onSubmit:u}=(0,c.E)(),{paymentMethods:h={}}=(0,r.m)(),g=s||o||t,E=i&&!l;return{paymentMethodButtonLabel:(h[d]||{}).placeOrderButtonLabel,onSubmit:u,isCalculating:e,isDisabled:s||m,waitingForProcessing:g,waitingForRedirect:E}}},65558:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var n=s(51609),a=s(27723),c=s(70851),r=s(86087),o=s(14656),i=s(32721),l=s(29491),d=s(47143),m=s(47594),u=s(13123),h=s(18568);const g=(0,l.withInstanceId)((({text:e,checkbox:t,instanceId:s,className:l,showSeparator:g})=>{const[E,p]=(0,r.useState)(!1),{isDisabled:b}=(0,i.w)(),k="terms-and-conditions-"+s,{setValidationErrors:_,clearValidationError:P}=(0,d.useDispatch)(m.validationStore),w=(0,d.useSelect)((e=>e(m.validationStore).getValidationError(k))),S=!(null==w||!w.message||null!=w&&w.hidden);return(0,r.useEffect)((()=>{if(t)return E?P(k):_({[k]:{message:(0,a.__)("Please read and accept the terms and conditions.","woocommerce"),hidden:!0}}),()=>{P(k)}}),[t,E,k,P,_]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(h.VM,null),(0,n.createElement)("div",{className:(0,c.A)("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":b,"wc-block-checkout__terms--with-separator":"false"!==g&&!1!==g},l)},t?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.CheckboxControl,{id:"terms-and-conditions",checked:E,onChange:()=>p((e=>!e)),hasError:S,disabled:b},(0,n.createElement)("span",{className:"wc-block-components-checkbox__label",dangerouslySetInnerHTML:{__html:e||u.R}}))):(0,n.createElement)("span",{className:"wc-block-components-checkbox__label",dangerouslySetInnerHTML:{__html:e||u.G}})))}))}}]);