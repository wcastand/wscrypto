export default {
  "breakpoints": [
    "600px",
    "768px",
    "960px",
    "1200px"
  ],
  "colors": {
    "text": "#000",
    "background": "#fff",
    "secondary": "#666",
    "selection": "#79ffe1",
    "link": "#0070f3",
    "code": "#f81ce5",
    "white": "#fff",
    "black": "#000",
    "gray": [
      "#fff",
      "#fafafa",
      "#eaeaea",
      "#999",
      "#888",
      "#666",
      "#444",
      "#333",
      "#111"
    ],
    "success": "#0070f3",
    "successLight": "#3291ff",
    "successDark": "#0366d6",
    "error": "#e00",
    "errorLight": "#ff1a1a",
    "errorDark": "#c00",
    "warning": "#f5a623",
    "warningLight": "#f7b955",
    "warningDark": "#f49b0b",
    "cyan": "#50e3c2",
    "cyanLighter": "#aaffec",
    "cyanLight": "#79ffe1",
    "cyanDark": "#29bc9b",
    "violet": "#7928ca",
    "violetLighter": "#e3d7fc",
    "violetLight": "#8a63d2",
    "violetDark": "#4c2889",
    "purple": "#f81ce5",
    "alert": "#ff0080",
    "magenta": "#eb367f",
    "modes": {
      "dark": {
        "text": "#fff",
        "background": "#000",
        "secondary": "#888",
        "selection": "#f81ce5",
        "link": "#fff",
        "gray": [
          "#000",
          "#111",
          "#333",
          "#444",
          "#666",
          "#888",
          "#999",
          "#eaeaea",
          "#fafafa"
        ],
        "success": "#0070f3",
        "successLight": "#3291ff",
        "successDark": "#0366d6",
        "error": "#e00",
        "errorLight": "#ff1a1a",
        "errorDark": "#c00",
        "warning": "#f5a623",
        "warningLight": "#f7b955",
        "warningDark": "#f49b0b"
      }
    }
  },
  "space": [
    "0pt",
    "4pt",
    "8pt",
    "16pt",
    "24pt",
    "32pt",
    "48pt"
  ],
  "fonts": {
    "body": "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif",
    "heading": "inherit",
    "monospace": "ui-monospace, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    "sans": "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
  },
  "fontSizes": [
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2.25rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem"
  ],
  "fontWeights": {
    "body": 400,
    "heading": 600,
    "bold": 700,
    "light": 300,
    "normal": 400
  },
  "lineHeights": {
    "body": 1.5,
    "heading": 1.2
  },
  "sizes": {
    "default": 750,
    "mini": 570,
    "small": 650,
    "medium": 850,
    "large": 930,
    "huge": 1110
  },
  "shadows": {
    "default": "0 4px 4px 0 rgba(0,0,0,0.02)",
    "dropdown": "0 4px 4px 0 rgba(0,0,0,0.02)",
    "small": "0 5px 10px rgba(0,0,0,0.12)",
    "medium": "0 8px 30px rgba(0,0,0,0.12)",
    "large": "0 30px 60px rgba(0,0,0,0.12)"
  },
  "radii": {
    "default": "5px",
    "small": "5px",
    "large": "10px",
    "pill": "9999px"
  },
  "styles": {
    "root": {
      "fontFamily": "body",
      "bg": "background",
      "color": "text",
      "WebkitFontSmoothing": "antialiased",
      "MozOsxFontSmoothing": "grayscale",
      "textRendering": "optimizeLegibility",
      "fontSize": "1rem",
      "lineHeight": "1.5",
      "margin": 0,
      "padding": 0,
      "minHeight": "100%",
      "position": "relative",
      "overflowX": "hidden",
      "::selection": {
        "bg": "selection",
        "color": "text"
      }
    },
    "p": {
      "margin": "1rem 0",
      "fontSize": "1em",
      "lineHeight": "1.625em"
    },
    "small": {
      "margin": 0,
      "lineHeight": "1.5",
      "fontSize": "0.875rem"
    },
    "span": {
      "fontSize": "inherit",
      "color": "inherit",
      "fontWeight": "inherit"
    },
    "strong": {
      "fontWeight": "600"
    },
    "img": {
      "height": "auto",
      "maxWidth": "100%"
    },
    "a": {
      "color": "link",
      "textDecoration": "none",
      "cursor": "pointer",
      "alignItems": "center",
      "fontSize": "inherit",
      "WebkitTouchCallout": "none",
      "WebkitTapHighlightColor": "rgba(0,0,0,0)",
      ":hover": {
        "textDecoration": "none"
      }
    },
    "h1,h2,h3,h4,h5,h6": {
      "fontFamily": "heading",
      "m": 0,
      "mb": "0.625rem",
      "color": "inherit"
    },
    "h1": {
      "fontSize": "3rem",
      "letterSpacing": "-0.066875rem",
      "lineHeight": "1.5",
      "fontWeight": "bold"
    },
    "h2": {
      "fontSize": "2.25rem",
      "letterSpacing": "-0.020625rem",
      "fontWeight": "heading"
    },
    "h3": {
      "fontSize": "1.5rem",
      "letterSpacing": "-0.029375rem",
      "fontWeight": "heading"
    },
    "h4": {
      "fontSize": "1.25rem",
      "letterSpacing": "-0.020625rem",
      "fontWeight": "heading"
    },
    "h5": {
      "fontSize": "1rem",
      "letterSpacing": "-0.01125rem",
      "fontWeight": "heading"
    },
    "h6": {
      "fontSize": "0.875rem",
      "letterSpacing": "-0.005625rem",
      "fontWeight": "heading"
    },
    "ul": {
      "margin": "1rem 0 1rem 0.9375rem",
      "color": "text",
      "padding": 0,
      "listStyleType": "none"
    },
    "ol": {
      "listStyleType": "decimal"
    },
    "li": {
      "marginBottom": "0.625rem",
      "fontSize": "1em",
      "lineHeight": "1.625em"
    },
    "ul li::before": {
      "content": "\"–\"",
      "display": "inline-block",
      "color": "gray.4",
      "position": "absolute",
      "marginLeft": "-0.9375rem"
    },
    "blockquote": {
      "display": "block",
      "width": "100%",
      "px": 3,
      "ml": 0,
      "my": 3,
      "lineHeight": "1.75",
      "border": "1px solid",
      "borderColor": "gray.2",
      "bg": "background",
      "color": "text",
      "borderRadius": "default"
    },
    "inlineCode": {
      "color": "code",
      "fontFamily": "monospace",
      "fontSize": "0.875em",
      "whiteSpace": "pre-wrap",
      "::before,::after": {
        "content": "\"`\""
      }
    },
    "pre": {
      "border": "1px solid",
      "borderColor": "gray.2",
      "borderRadius": "default",
      "py": 3,
      "px": 3,
      "my": 3,
      "whiteSpace": "pre",
      "overflow": "auto",
      "WebkitOverflowScrolling": "touch",
      "code": {
        ".token.comment": {
          "color": "gray.3"
        },
        ".token.prolog": {
          "color": "gray.3"
        },
        ".token.doctype": {
          "color": "gray.3"
        },
        ".token.cdata": {
          "color": "gray.3"
        },
        ".token.namespace": {
          "opacity": 0.7
        },
        ".token.string": {
          "color": "#028265"
        },
        ".token.attr-value": {
          "color": "#028265"
        },
        ".token.punctuation": {
          "color": "text"
        },
        ".token.operator": {
          "color": "text"
        },
        ".token.url": {
          "color": "#36acaa"
        },
        ".token.symbol": {
          "color": "#36acaa"
        },
        ".token.boolean": {
          "color": "#36acaa"
        },
        ".token.variable": {
          "color": "#36acaa"
        },
        ".token.constant": {
          "color": "#36acaa"
        },
        ".token.atrule": {
          "fontWeight": "600"
        },
        ".language-autohotkey .token.selector": {
          "fontWeight": "600"
        },
        ".language-json .token.boolean": {
          "color": "#0076ff"
        },
        ".token.atrule, .language-autohotkey .token.selector, .language-json .token.boolean, code[class*=\"language-css\"]": {
          "fontWeight": "600"
        },
        ".token.keyword": {
          "color": "#ff0078",
          "fontWeight": "bolder"
        },
        ".token.function": {
          "color": "#0076ff"
        },
        ".token.tag": {
          "color": "#0076ff"
        },
        ".token.class-name": {
          "color": "#0076ff"
        },
        ".token.number": {
          "color": "#0076ff"
        },
        ".token.tag .token.punctuation": {
          "color": "#0076ff"
        },
        ".language-autohotkey .token.tag": {
          "color": "#9a050f"
        },
        ".token.selector": {
          "color": "#2b91af"
        },
        ".language-autohotkey .token.keyword": {
          "color": "#00009f"
        },
        ".token.important": {
          "fontWeight": "bold"
        },
        ".token.bold": {
          "fontWeight": "bold"
        },
        ".token.italic": {
          "fontStyle": "italic"
        },
        ".token.deleted": {
          "color": "red",
          "fontWeight": "bolder"
        },
        ".token.inserted": {
          "color": "#0076ff",
          "fontWeight": "bolder"
        },
        ".language-json .token.property": {
          "color": "text",
          "fontWeight": "bolder"
        },
        ".language-markdown .token.title": {
          "color": "text",
          "fontWeight": "bolder"
        },
        ".language-markdown .token.code": {
          "color": "#0076ff",
          "fontWeight": "normal"
        },
        ".language-markdown .token.list": {
          "color": "gray.3"
        },
        ".language-markdown .token.hr": {
          "color": "gray.3"
        },
        ".language-markdown .token.url": {
          "color": "#ff0078",
          "fontWeight": "bolder"
        },
        ".token.property": {
          "color": "#f00"
        },
        ".token.entity": {
          "color": "#f00"
        },
        ".token.attr-name": {
          "color": "#d9931e"
        },
        ".token.regex": {
          "color": "#d9931e"
        },
        ".token.directive.tag .tag": {
          "background": "#ff0",
          "color": "#393a34"
        },
        "color": "var(--geist-foreground)",
        "fontFamily": "monospace",
        "fontSize": "0.875em",
        "lineHeight": 1.25,
        "whiteSpace": "pre-wrap",
        "::before,::after": {
          "content": "\"\"",
          "display": "none"
        }
      }
    },
    "hr": {
      "borderColor": "gray.2"
    },
    "details": {
      "bg": "gray.1"
    },
    "table": {
      "borderCollapse": "separate",
      "borderSpacing": 0,
      "width": "100%",
      "thead th td": {
        "height": "2.5rem"
      },
      "tbody tr td": {
        "height": "3.125rem"
      },
      "tr td": {
        "color": "gray.6",
        "fontSize": 0,
        "height": "2.5rem",
        "borderBottom": "1px solid",
        "borderBottomColor": "gray.2"
      },
      "td": {
        "padding": "0 .625rem",
        "textAlign": "left",
        ":first-of-type": {
          "borderLeft": "1px solid transparent"
        }
      },
      "th": {
        "borderTop": "1px solid",
        "borderTopColor": "gray.2",
        "borderBottom": "1px solid",
        "borderBottomColor": "gray.2",
        "bg": "gray.1",
        "color": "gray.5",
        "fontSize": 0,
        "fontWeight": "body",
        "letterSpacing": 0,
        "textAlign": "left",
        "height": "2.5rem",
        "padding": "0 .625rem",
        ":first-of-type": {
          "borderLeft": "1px solid",
          "borderLeftColor": "gray.2",
          "borderRadius": "4px 0 0 4px"
        },
        ":last-of-type": {
          "borderRight": "1px solid",
          "borderRightColor": "gray.2",
          "borderRadius": "0 4px 4px 0"
        }
      }
    }
  },
  "avatars": {
    "default": {
      "display": "inline-block",
      "position": "relative",
      "overflow": "hidden",
      "width": "1.875rem",
      "height": "1.875rem",
      "border": "1px solid",
      "borderColor": "gray.2",
      "verticalAlign": "top",
      "bg": "background",
      "borderRadius": "pill",
      "& + &": {
        "ml": 0
      }
    },
    "small": {
      "variant": "avatars.default",
      "width": "1.25rem",
      "height": "1.25rem"
    },
    "big": {
      "variant": "avatars.default",
      "width": "3.75rem",
      "height": "3.75rem"
    },
    "huge": {
      "variant": "avatars.default",
      "width": "5.625rem",
      "height": "5.625rem"
    }
  },
  "badges": {
    "primary": {
      "py": 1,
      "px": 2,
      "bg": "text",
      "color": "background",
      "display": "inline-block",
      "fontSize": 0,
      "fontVariant": "tabular-nums",
      "fontWeight": "bold",
      "lineHeight": 1,
      "verticalAlign": "middle",
      "borderRadius": "pill",
      "textAlign": "center"
    },
    "success": {
      "variant": "badges.primary",
      "bg": "success"
    },
    "warning": {
      "variant": "badges.primary",
      "bg": "warning"
    },
    "danger": {
      "variant": "badges.primary",
      "bg": "error"
    },
    "error": {
      "variant": "badges.primary",
      "bg": "error"
    },
    "secondary": {
      "variant": "badges.primary",
      "bg": "secondary"
    },
    "mini": {
      "variant": "badges.primary",
      "py": "2pt",
      "px": 1,
      "fontSize": "0.75rem"
    },
    "big": {
      "variant": "badges.primary",
      "fontSize": 2,
      "lineHeight": 1.125
    },
    "dot": {
      "display": "inline-block",
      "width": "0.375rem",
      "height": "0.375rem",
      "bg": "error",
      "borderRadius": "pill",
      "padding": 0,
      "overflow": "hidden",
      "lineHeight": 0,
      "color": "transparent"
    }
  },
  "buttons": {
    "primary": {
      "bg": "background",
      "border": "1px solid",
      "borderColor": "gray.2",
      "borderRadius": "default",
      "color": "gray.5",
      "cursor": "pointer",
      "display": "inline-block",
      "fontSize": ".875rem",
      "fontWeight": "normal",
      "height": "2.5rem",
      "justifyContent": "center",
      "lineHeight": "2.5rem",
      "minWidth": "12.5rem",
      "outline": "none",
      "overflow": "hidden",
      "padding": "0 1.375rem",
      "position": "relative",
      "textAlign": "center",
      "textTransform": "uppercase",
      "transition": ".2s ease",
      "transitionProperty": "color, background-color, border-color, box-shadow",
      "userSelect": "none",
      "whiteSpace": "nowrap",
      "width": "auto",
      ":hover,:focus": {
        "color": "text",
        "bg": "background",
        "borderColor": "currentColor"
      }
    },
    "mini": {
      "variant": "buttons.primary",
      "height": "1.5rem",
      "lineHeight": "1.5rem",
      "padding": "0 1.375rem",
      "width": "auto",
      "minWidth": "5.25rem",
      "fontSize": ".75rem"
    },
    "small": {
      "variant": "buttons.primary",
      "height": "2rem",
      "lineHeight": "2rem",
      "padding": "0 1.25rem",
      "width": "auto",
      "minWidth": "9.375rem",
      "fontSize": ".875rem"
    },
    "large": {
      "variant": "buttons.primary",
      "height": "2.75rem",
      "lineHeight": "2.75rem",
      "padding": "0 1.875rem",
      "width": "auto",
      "minWidth": "15.625rem",
      "fontSize": "1rem"
    },
    "huge": {
      "variant": "buttons.primary",
      "height": "2.75rem",
      "lineHeight": "2.75rem",
      "padding": "0 1.875rem",
      "width": "auto",
      "minWidth": "15.625rem",
      "fontSize": "1rem"
    },
    "big": {
      "variant": "buttons.primary",
      "height": "2.75rem",
      "lineHeight": "2.75rem",
      "padding": "0 1.875rem",
      "width": "auto",
      "minWidth": "15.625rem",
      "fontSize": "1rem"
    },
    "success": {
      "variant": "buttons.primary",
      "borderColor": "success",
      "bg": "success",
      "color": "white",
      ":hover,:focus": {
        "color": "success",
        "bg": "background",
        "borderColor": "success"
      }
    },
    "warning": {
      "variant": "buttons.primary",
      "borderColor": "warning",
      "bg": "warning",
      "color": "white",
      ":hover,:focus": {
        "color": "warning",
        "bg": "background",
        "borderColor": "warning"
      }
    },
    "error": {
      "variant": "buttons.primary",
      "borderColor": "error",
      "bg": "error",
      "color": "white",
      ":hover,:focus": {
        "color": "error",
        "bg": "background",
        "borderColor": "error"
      }
    },
    "danger": {
      "variant": "buttons.primary",
      "borderColor": "error",
      "bg": "error",
      "color": "white",
      ":hover,:focus": {
        "color": "error",
        "bg": "background",
        "borderColor": "error"
      }
    },
    "abort": {
      "variant": "buttons.primary",
      "bg": "transparent",
      "borderColor": "transparent",
      "color": "gray.5",
      ":hover,:focus": {
        "bg": "transparent",
        "borderColor": "transparent",
        "color": "gray.5"
      }
    },
    "shadow": {
      "variant": "buttons.primary",
      "transitionProperty": "transform, box-shadow",
      "boxShadow": "0 3px 10px rgba(0, 0, 0, .12)",
      ":hover,:focus": {
        "boxShadow": "0 7px 20px rgba(0, 0, 0, .16)",
        "transform": "translateY(-1px)"
      }
    },
    "disabled": {
      "&,&:hover,&:focus": {
        "variant": "buttons.primary",
        "bg": "gray.1",
        "borderColor": "gray.2",
        "color": "#ccc !important",
        "cursor": "not-allowed !important"
      }
    }
  },
  "cards": {
    "primary": {
      "bg": "background",
      "color": "text",
      "borderRadius": "default",
      "boxShadow": "none",
      "overflow": "hidden",
      "p": 3,
      "transition": "box-shadow 0.2s ease",
      "width": "100%",
      "border": "1px solid",
      "borderColor": "gray.2",
      ":hover,:focus": {
        "boxShadow": "small"
      }
    },
    "shadow": {
      "variant": "cards.primary",
      "transition": "box-shadow 0.2s ease",
      "boxShadow": "small",
      ":hover,:focus": {
        "boxShadow": "medium"
      }
    },
    "border": {
      "bg": "background",
      "color": "text",
      "borderRadius": "default",
      "boxShadow": "none",
      "overflow": "hidden",
      "p": 3,
      "width": "100%",
      "border": "1px solid",
      "borderColor": "gray.2"
    }
  },
  "forms": {
    "input": {
      "fontFamily": "sans",
      "padding": "0 .6875rem",
      "verticalAlign": "middle",
      "alignItems": "center",
      "borderRadius": "default",
      "bg": "transparent",
      "fontSize": ".875rem",
      "height": "2.3125rem",
      "lineHeight": "1.6875rem",
      "width": "auto",
      "outline": 0,
      "mt": 1,
      "border": "1px solid",
      "borderColor": "gray.2",
      "WebkitAppearance": "none",
      "transition": "border .2s ease,color .2s ease",
      ":focus": {
        "borderColor": "gray.5"
      },
      ":disabled": {
        "bg": "gray.1",
        "cursor": "not-allowed"
      },
      ":-webkit-autofill": {
        "boxShadow": "inset 0 0 0 100px #fff"
      },
      "::-webkit-input-placeholder": {
        "color": "gray.4"
      },
      "::-moz-placeholder": {
        "color": "gray.4"
      },
      ":-ms-input-placeholder": {
        "color": "gray.4"
      },
      "&[type=\"search\"]::-webkit-search-decoration": {
        "display": "none"
      }
    },
    "disabled": {
      "variant": "forms.input",
      "bg": "gray.1",
      "cursor": "not-allowed"
    },
    "textarea": {
      "variant": "forms.input",
      "height": "auto",
      "minHeight": "4.625rem",
      "lineHeight": "1.5rem"
    },
    "select": {
      "variant": "forms.input",
      "input:checked ~ &": {
        "color": "text"
      }
    },
    "radio": {
      "color": "gray.4",
      "input:checked ~ &": {
        "color": "text"
      }
    },
    "checkbox": {
      "color": "gray.4"
    },
    "small": {
      "variant": "forms.input",
      "fontSize": "0.75rem",
      "height": "2rem",
      "lineHeight": "1.375rem"
    },
    "large": {
      "variant": "forms.input",
      "fontSize": "1rem",
      "height": "2.625rem",
      "lineHeight": "2.375rem"
    },
    "error": {
      "variant": "forms.input",
      "borderColor": "error",
      "color": "error"
    },
    "success": {
      "variant": "forms.input",
      "borderColor": "success",
      "color": "success"
    },
    "label": {
      "color": "text",
      "textAlign": "left",
      "fontSize": 1,
      "display": "flex",
      "flexDirection": "column"
    },
    "labelHoriz": {
      "color": "text",
      "textAlign": "left",
      "fontSize": 1,
      "display": "flex"
    },
    "slider": {
      "bg": "gray.2",
      "color": "success"
    },
    "hidden": {
      "position": "absolute",
      "height": "1px",
      "width": "1px",
      "overflow": "hidden",
      "clip": "rect(1px, 1px, 1px, 1px)",
      "whiteSpace": "nowrap"
    }
  },
  "layout": {
    "container": {
      "maxWidth": "default",
      "width": "100%",
      "mx": "auto",
      "px": 3
    },
    "mini": {
      "variant": "layout.container",
      "maxWidth": "mini"
    },
    "small": {
      "variant": "layout.container",
      "maxWidth": "small"
    },
    "medium": {
      "variant": "layout.container",
      "maxWidth": "medium"
    },
    "large": {
      "variant": "layout.container",
      "maxWidth": "large"
    },
    "huge": {
      "variant": "layout.container",
      "maxWidth": "huge"
    }
  }
}