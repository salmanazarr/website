/** @jsx jsx */

import { Link } from "gatsby"
import { jsx, Styled, Box } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListAlt } from "@fortawesome/free-solid-svg-icons"

const NestedList = ({ toc, depth }) => (
  <Styled.ul>
    {toc.map(({ url, title, items }, i) => (
      <Styled.li key={i} sx={{ fontSize: 1 }}>
        <Styled.a as={Link} to={url}>
          {title}
        </Styled.a>
        {items ? <NestedList toc={items} depth={depth + 1} /> : null}
      </Styled.li>
    ))}
  </Styled.ul>
)

const TableOfContents = ({ toc: { items }, color }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        p: 3,
        position: "sticky",
        top: 4,
        borderTopStyle: "solid",
        borderTopWidth: 4,
        borderTopColor: color || "primary",
        borderRightStyle: "solid",
        borderRightWidth: "px",
        borderRightColor: "muted",
        borderBottomStyle: "solid",
        borderBottomWidth: "px",
        borderBottomColor: "muted",
        borderLeftStyle: "solid",
        borderLeftWidth: "px",
        borderLeftColor: "muted",
      }}
    >
      <Styled.h5>
        <FontAwesomeIcon icon={faListAlt} sx={{ mr: 1 }} /> Contents
      </Styled.h5>
      <NestedList toc={items} depth={0} />
    </Box>
  )
}

export default TableOfContents
