// Generated by Framer (2491c01)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,RichText,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import*as sharedStyle from"https://framerusercontent.com/modules/yu3I6eTNEyX3XwW7glUP/xAsUxDl3eTa665OnYsFy/xZndidUCt.js";const cycleOrder=["GWtG1IhEY"];const variantClassNames={GWtG1IhEY:"framer-v-hs3yi7"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="GWtG1IhEY",title:LEJDBemzD="Start your  next design.",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"GWtG1IhEY",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-LAitH",sharedStyle.className,classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsx(motion.div,{...restProps,className:cx("framer-hs3yi7",className),"data-framer-name":"Variant 1",layoutDependency:layoutDependency,layoutId:"GWtG1IhEY",ref:ref,style:{...style},transition:transition,children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1y3xicu","data-framer-name":"CTA",layoutDependency:layoutDependency,layoutId:"I80:57;27:59",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1mu9i2q","data-framer-name":"Rectangle 6",layoutDependency:layoutDependency,layoutId:"I80:57;27:59;22:65",style:{backgroundColor:"rgb(255, 158, 158)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20},transition:transition}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1pl8gri","data-border":true,"data-framer-name":"Rectangle 5",layoutDependency:layoutDependency,layoutId:"I80:57;27:59;22:66",style:{"--border-bottom-width":"1px","--border-color":"rgb(0, 0, 0)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgb(255, 202, 200)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20},transition:transition}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-21ogod","data-styles-preset":"xZndidUCt",children:"Start your  next design."})}),className:"framer-ej1h1n","data-framer-name":"Start your next design.",layoutDependency:layoutDependency,layoutId:"jMIf2JmTL",style:{"--framer-paragraph-spacing":"0px"},text:LEJDBemzD,transition:transition,verticalAlignment:"center",withExternalLayout:true})]})})})});});const css=['.framer-LAitH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-LAitH * { box-sizing: border-box; }",".framer-LAitH .framer-vu62tp { display: block; }",".framer-LAitH .framer-hs3yi7 { height: 120px; overflow: visible; position: relative; width: 300px; }",".framer-LAitH .framer-1y3xicu { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",".framer-LAitH .framer-1mu9i2q { bottom: 0px; flex: none; left: 17px; overflow: hidden; position: absolute; right: 0px; top: 28px; will-change: transform; }",".framer-LAitH .framer-1pl8gri { bottom: 15px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 9px; top: 0px; will-change: transform; }",".framer-LAitH .framer-ej1h1n { flex: none; height: 135px; overflow: hidden; position: absolute; right: 0px; top: calc(44.166666666666686% - 135px / 2); white-space: pre-wrap; width: 300px; word-break: break-word; word-wrap: break-word; }",...sharedStyle.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 120
 * @framerIntrinsicWidth 300
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"LEJDBemzD":"title"}
 */ const Framerexi0cwXV2=withCSS(Component,css);export default Framerexi0cwXV2;Framerexi0cwXV2.displayName="CTA";Framerexi0cwXV2.defaultProps={height:120,width:300};addPropertyControls(Framerexi0cwXV2,{LEJDBemzD:{defaultValue:"Start your  next design.",displayTextArea:false,title:"Title",type:ControlType.String}});addFonts(Framerexi0cwXV2,[...sharedStyle.fonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"Framerexi0cwXV2","slots":[],"annotations":{"framerIntrinsicHeight":"120","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerContractVersion":"1","framerIntrinsicWidth":"300","framerVariables":"{\"LEJDBemzD\":\"title\"}"}},"__FramerMetadata__":{"type":"variable"}}}