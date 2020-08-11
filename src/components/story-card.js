import React, { useRef } from "react";
import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Link,
  PseudoBox,
  Stack,
  Text,
  Tooltip
} from "@chakra-ui/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function StoryCard({
  tags,
  author,
  title,
  url,
  points,
  num_comments,
  created_at,
  objectID,
  headingLevel = "h3"
}) {
  const articleLinkRef = useRef();
  const defaultArticleUrl = `https://news.ycombinator.com/item?id=${objectID}`;
  const authorUrl = `https://news.ycombinator.com/user?id=${author}`;

  const { origin } = url ? new URL(url) : new URL(defaultArticleUrl);
  const faviconUrl = `${origin}/favicon.ico`;
  const fallbackFaviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${origin}`;

  const creationDate = dayjs.extend(relativeTime)(created_at);

  return (
    <PseudoBox
      as="article"
      key={objectID}
      borderWidth="1px"
      rounded="lg"
      padding="1rem"
      onClick={() => articleLinkRef.current.click()}
      display="flex"
      boxShadow="md"
      _hover={{
        transform: "scale(0.99, 0.99)",
        cursor: "pointer"
      }}
      _focusWithin={{
        boxShadow: "outline"
      }}
    >
      <Flex
        flexGrow="1"
        direction="column"
        justifyContent="space-between"
        minHeight={{ _: "4.6rem" }}
      >
        <Box>
          <Image
            src={faviconUrl}
            fallbackSrc={fallbackFaviconUrl}
            maxWidth="1rem"
            display="inline"
            marginRight="0.5rem"
          />
          <Text
            as={headingLevel}
            display="inline"
            fontWeight="semibold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            <Link
              href={url || defaultArticleUrl}
              ref={articleLinkRef}
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              {title}
            </Link>
          </Text>
        </Box>
        <Stack maxWidth="24rem" fontSize="md">
          <Text as="span" color="gray.500" fontStyle="italic" flexGrow="1">
            by{" "}
            <Link href={authorUrl} _focus={{ textDecoration: "underline" }}>
              {author}
            </Link>
            ,{" "}
            <Tooltip
              hasArrow
              label={creationDate.format("dddd D MMMM YYYY, HH:mm")}
              placement="top"
            >
              <Text as="span">{creationDate.fromNow()}</Text>
            </Tooltip>
          </Text>
          <Stack isInline alignItems="baseline" spacing="0.5rem">
            <Badge
              as={Link}
              href={defaultArticleUrl}
              tabIndex="-1"
              rounded="full"
              variantColor="teal"
              padding="0.25rem 0.75rem"
              fontSize="0.65em"
            >
              {points} points
            </Badge>
            <Badge
              as={Link}
              href={defaultArticleUrl}
              rounded="full"
              variantColor="orange"
              padding="0.25rem 0.75rem"
              fontSize="0.65em"
            >
              {num_comments} comments
            </Badge>
          </Stack>
        </Stack>
      </Flex>
      <Icon
        name="chevron-right"
        size="2rem"
        height="unset"
        color="purple.900"
      />
    </PseudoBox>
  );
}
