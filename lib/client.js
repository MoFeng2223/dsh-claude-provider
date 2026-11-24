window.__ModuleLoader__.load({
	id: "@mofeng2223/dsh-claude-provider",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
		const LEGAL_API_KEY = /^[\x21-\x7E]+$/;
		const ENV_LINE = /^[A-Z][A-Z0-9_]*=[^=]/;
		function isQuoted(value) {
			const first = value[0];
			if (first !== '"' && first !== "'" && first !== "`") return false;
			return value.length > 1 && value.endsWith(first);
		}
		function apiKeyFailure(draft) {
			if (draft.length === 0) return void 0;
			const value = draft.trim();
			if (value.length === 0) return "keyBlank";
			if (ENV_LINE.test(value) || isQuoted(value)) return "keyIllegalCharacters";
			if (!LEGAL_API_KEY.test(value)) return "keyIllegalCharacters";
		}
		var ModelsSection_module_css_default = {
			accountStatus: "zGbnIq_accountStatus",
			addActions: "zGbnIq_addActions",
			addBlock: "zGbnIq_addBlock",
			addButton: "zGbnIq_addButton",
			addCard: "zGbnIq_addCard",
			addModelButton: "zGbnIq_addModelButton",
			addModes: "zGbnIq_addModes",
			addPanel: "zGbnIq_addPanel",
			advancedHint: "zGbnIq_advancedHint",
			candidate: "zGbnIq_candidate",
			candidateEmpty: "zGbnIq_candidateEmpty",
			candidateId: "zGbnIq_candidateId",
			candidateLabel: "zGbnIq_candidateLabel",
			candidateList: "zGbnIq_candidateList",
			candidateSearch: "zGbnIq_candidateSearch",
			candidateToolbar: "zGbnIq_candidateToolbar",
			credentialDot: "zGbnIq_credentialDot",
			credentialDotConfigured: "zGbnIq_credentialDotConfigured",
			credentialDotMissing: "zGbnIq_credentialDotMissing",
			customized: "zGbnIq_customized",
			customizedBody: "zGbnIq_customizedBody",
			customizedSummary: "zGbnIq_customizedSummary",
			dangerButton: "zGbnIq_dangerButton",
			deleteConfirm: "zGbnIq_deleteConfirm",
			deleteDialog: "zGbnIq_deleteDialog",
			editor: "zGbnIq_editor",
			editorActions: "zGbnIq_editorActions",
			editorHeader: "zGbnIq_editorHeader",
			editorRoute: "zGbnIq_editorRoute",
			editorTitle: "zGbnIq_editorTitle",
			error: "zGbnIq_error",
			fetchDialog: "zGbnIq_fetchDialog",
			field: "zGbnIq_field",
			fieldLabel: "zGbnIq_fieldLabel",
			helpButton: "zGbnIq_helpButton",
			hiddenLabel: "zGbnIq_hiddenLabel",
			iconButton: "zGbnIq_iconButton",
			iconButtonDanger: "zGbnIq_iconButtonDanger",
			input: "zGbnIq_input",
			intro: "zGbnIq_intro",
			keyInput: "zGbnIq_keyInput",
			keyInputFilled: "zGbnIq_keyInputFilled",
			keyToggle: "zGbnIq_keyToggle",
			linkButton: "zGbnIq_linkButton",
			"model-row": "zGbnIq_model-row",
			modelAdvanced: "zGbnIq_modelAdvanced",
			modelCatalog: "zGbnIq_modelCatalog",
			modelCatalogHeading: "zGbnIq_modelCatalogHeading",
			modelCatalogMeta: "zGbnIq_modelCatalogMeta",
			modelCatalogTitle: "zGbnIq_modelCatalogTitle",
			modelDragHandle: "zGbnIq_modelDragHandle",
			modelDragPreview: "zGbnIq_modelDragPreview",
			modelEmpty: "zGbnIq_modelEmpty",
			modelEntry: "zGbnIq_modelEntry",
			modelField: "zGbnIq_modelField",
			modelFieldLabel: "zGbnIq_modelFieldLabel",
			modelInputChoices: "zGbnIq_modelInputChoices",
			modelInputTypes: "zGbnIq_modelInputTypes",
			modelList: "zGbnIq_modelList",
			modelListHead: "zGbnIq_modelListHead",
			modelName: "zGbnIq_modelName",
			modelNameLabel: "zGbnIq_modelNameLabel",
			modelReasoning: "zGbnIq_modelReasoning",
			modelReasoningHead: "zGbnIq_modelReasoningHead",
			modelReasoningLabel: "zGbnIq_modelReasoningLabel",
			modelReasoningRow: "zGbnIq_modelReasoningRow",
			modelReasoningValueInput: "zGbnIq_modelReasoningValueInput",
			modelRow: "zGbnIq_modelRow",
			notice: "zGbnIq_notice",
			primaryButton: "zGbnIq_primaryButton",
			retryBackoff: "zGbnIq_retryBackoff",
			retryBody: "zGbnIq_retryBody",
			retryCodeAdd: "zGbnIq_retryCodeAdd",
			retryCodeChoices: "zGbnIq_retryCodeChoices",
			retryCount: "zGbnIq_retryCount",
			retryFold: "zGbnIq_retryFold",
			rowActions: "zGbnIq_rowActions",
			rowCard: "zGbnIq_rowCard",
			rowHead: "zGbnIq_rowHead",
			rowIdentity: "zGbnIq_rowIdentity",
			rowName: "zGbnIq_rowName",
			rowTag: "zGbnIq_rowTag",
			rows: "zGbnIq_rows",
			savedKeyInput: "zGbnIq_savedKeyInput",
			savedNotice: "zGbnIq_savedNotice",
			secondaryButton: "zGbnIq_secondaryButton",
			section: "zGbnIq_section",
			sectionHeader: "zGbnIq_sectionHeader",
			selectInput: "zGbnIq_selectInput",
			setupCard: "zGbnIq_setupCard",
			switchThumb: "zGbnIq_switchThumb",
			title: "zGbnIq_title"
		};
		const EYE_CONTOUR =
			"M1.5 8C2.9 5.25 5.25 3.5 8 3.5C10.75 3.5 13.1 5.25 14.5 8C13.1 10.75 10.75 12.5 8 12.5C5.25 12.5 2.9 10.75 1.5 8Z";
		const EYE_PATH = `${EYE_CONTOUR}M10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8Z`;
		const EYE_OFF_PATH = `${EYE_CONTOUR}M2.5 2.5L13.5 13.5`;
		function ApiKeyInput({ value, saved, t, ...props }) {
			const [revealedValue, setRevealedValue] = (0, react.useState)();
			const canReveal = saved === void 0 && value.length > 0 && props.disabled !== true;
			const revealed = canReveal && revealedValue === value;
			return (0, react_jsx_runtime.jsxs)("div", {
				className: `${ModelsSection_module_css_default["keyInput"]} ${saved === void 0 ? "" : ModelsSection_module_css_default["savedKeyInput"]}`,
				children: [
					(0, react_jsx_runtime.jsx)("input", {
						...props,
						className: `${ModelsSection_module_css_default["input"]} ${canReveal ? ModelsSection_module_css_default["keyInputFilled"] : ""}`,
						type: revealed ? "text" : "password",
						autoComplete: "new-password",
						value,
						placeholder: saved === void 0 ? props.placeholder : saved.masked,
						onCopy: (event) => {
							if (saved !== void 0) event.preventDefault();
						},
						onCut: (event) => {
							if (saved !== void 0) event.preventDefault();
						},
						onKeyDown: (event) => {
							if (saved !== void 0 && (event.key === "Backspace" || event.key === "Delete")) {
								event.preventDefault();
								saved.clear?.();
							}
						},
						onChange: (event) => {
							setRevealedValue(void 0);
							props.onChange?.(event);
						}
					}),
					!canReveal
						? null
						: (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: ModelsSection_module_css_default["keyToggle"],
								"aria-label": t(revealed ? "keyHide" : "keyReveal"),
								"aria-pressed": revealed,
								onClick: () => {
									setRevealedValue(revealed ? void 0 : value);
								},
								children: (0, react_jsx_runtime.jsx)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 16 16",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 1.3,
									strokeLinecap: "round",
									"aria-hidden": "true",
									children: (0, react_jsx_runtime.jsx)("path", { d: revealed ? EYE_OFF_PATH : EYE_PATH })
								})
							})
				]
			});
		}
		function EditorFooter(props) {
			const { t } = props;
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_css_default["editorActions"],
				children: [
					(0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: ModelsSection_module_css_default["secondaryButton"],
						disabled: props.busy,
						onClick: props.onCancel,
						children: t(props.cancelLabelKey ?? "cancel")
					}),
					(0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: ModelsSection_module_css_default["primaryButton"],
						disabled: props.submitDisabled,
						onClick: props.onSubmit,
						children: props.busy ? t(props.submitBusyLabelKey) : t(props.submitLabelKey)
					})
				]
			});
		}
		function ModelInputTypes({ model, field, position, disabled, fallback, t, onChange }) {
			const modalities = model[field];
			const selected = Array.isArray(modalities) && modalities.length > 0 ? modalities : (fallback ?? ["text"]);
			return (0, react_jsx_runtime.jsxs)("fieldset", {
				className: ModelsSection_module_css_default["modelInputTypes"],
				"aria-label": `${t("modelInputTypes")} ${String(position)}`,
				children: [
					(0, react_jsx_runtime.jsx)("legend", {
						className: ModelsSection_module_css_default["modelFieldLabel"],
						children: t("modelInputTypes")
					}),
					(0, react_jsx_runtime.jsx)("div", {
						className: ModelsSection_module_css_default["modelInputChoices"],
						children: ["text", "image"].map((modality) =>
							(0, react_jsx_runtime.jsx)(
								_deepseek_ai_dsh_client_ui_primitives.Checkbox,
								{
									label: t(modality === "text" ? "modelInputText" : "modelInputImage"),
									checked: selected.includes(modality),
									disabled: disabled || (selected.length === 1 && selected.includes(modality)),
									onChange: (checked) => {
										const nextSelected = ["text", "image"].filter((value) =>
											value === modality ? checked : selected.includes(value)
										);
										const next = { ...model, [field]: nextSelected };
										if (field === "inputModalities" && !nextSelected.includes("image")) {
											Reflect.deleteProperty(next, "imagePixelBudget");
											Reflect.deleteProperty(next, "imageTargetBytes");
										}
										onChange(next);
									}
								},
								modality
							)
						)
					})
				]
			});
		}
		const INITIAL_LEVELS = ["off", "low", "medium", "high"];
		function defaultValue(level) {
			return level === "off" ? null : level;
		}
		function acceptedValue(level, wire) {
			return typeof wire === "string" ? wire.length > 0 : wire === null && level === "off";
		}
		function readEfforts(model) {
			const value = model["reasoningEfforts"];
			if (value === null) return [];
			if (typeof value !== "object" || Array.isArray(value)) return void 0;
			return Object.entries(value);
		}
		function withEfforts(model, entries) {
			const next = { ...model };
			if (entries === void 0) {
				Reflect.deleteProperty(next, "reasoningEfforts");
				return next;
			}
			next["reasoningEfforts"] = Object.fromEntries(entries);
			return next;
		}
		function outsideLevels(only, level, wire) {
			return !only.includes(level) || wire !== level;
		}
		function validateReasoningEfforts(value, only) {
			for (const [index, model] of modelDrafts(value).entries()) {
				const entries = readEfforts(model);
				if (entries === void 0) continue;
				if (only !== void 0 && entries.some(([level, wire]) => outsideLevels(only, level, wire)))
					return { index, key: "modelReasoningLevelsOnly" };
				if (entries.some(([level, wire]) => !acceptedValue(level, wire)))
					return { index, key: "modelReasoningValueRequired" };
				if (!entries.some(([level]) => level !== "off")) return { index, key: "modelReasoningNeedsLevel" };
			}
		}
		function ModelReasoningEfforts(props) {
			const { model, levels, levelsOnly, position, disabled, t, onChange, claude, adaptiveFallback } = props;
			const entries = readEfforts(model);
			const [typing, setTyping] = (0, react.useState)(void 0);
			const label = `${t("modelReasoning")} ${String(position)}`;
			const used = entries?.map(([level]) => level) ?? [];
			const write = (next) => {
				onChange(withEfforts(model, next));
			};
			const replaceAt = (current, index, entry) => current.map((existing, at) => (at === index ? entry : existing));
			const changeLevel = (current, index, from, wire, to) => {
				write(
					replaceAt(current, index, [
						to,
						!levelsOnly &&
						typeof wire === "string" &&
						wire.length > 0 &&
						wire !== from &&
						from !== "off" &&
						to !== "off"
							? wire
							: defaultValue(to)
					])
				);
			};
			const addLevel = (current) => {
				const highest = Math.max(-1, ...used.map((level) => levels.indexOf(level)));
				const level =
					levels.find((candidate, index) => index > highest && !used.includes(candidate)) ??
					levels.find((candidate) => !used.includes(candidate));
				if (level === void 0) return;
				write([...current, [level, defaultValue(level)]]);
			};
			const editValue = (current, index, level, text) => {
				setTyping({ level, text });
				const trimmed = text.trim();
				write(replaceAt(current, index, [level, trimmed.length === 0 ? defaultValue(level) : trimmed]));
			};
			const leaveValue = (current, index, level, wire) => {
				setTyping(void 0);
				if (!acceptedValue(level, wire)) write(replaceAt(current, index, [level, defaultValue(level)]));
			};
			const choicesFor = (level) => [
				...(levels.includes(level) ? [] : [level]),
				...levels.filter((choice) => choice === level || !used.includes(choice))
			];
			const initialEntries = claude
				? Object.entries(reasoningEffortsForPreset(CLAUDE_KNOWN_MODELS[model.id]?.preset ?? "five"))
				: INITIAL_LEVELS.filter((level) => levels.includes(level)).map((level) => [level, defaultValue(level)]);
			const refused = entries?.some(([level, wire]) => !acceptedValue(level, wire)) === true;
			const missingLevel = entries !== void 0 && !used.some((level) => level !== "off");
			const outside = levelsOnly && entries?.some(([level, wire]) => outsideLevels(levels, level, wire)) === true;
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_css_default["modelReasoning"],
				role: "group",
				"aria-label": label,
				children: [
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["modelReasoningHead"],
						children: [
							(0, react_jsx_runtime.jsxs)("span", {
								className: `${ModelsSection_module_css_default["modelFieldLabel"]} ${ModelsSection_module_css_default["modelReasoningLabel"]}`,
								children: [
									t("modelReasoning"),
									(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
										label: t("modelReasoningHelpText"),
										side: "right",
										delayMs: 0,
										focusDelayMs: 0,
										portal: true,
										openOnClick: true,
										children: (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: ModelsSection_module_css_default["helpButton"],
											"aria-label": t("modelReasoningHelp"),
											children: "?"
										})
									})
								]
							}),
							(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
								checked: entries !== void 0,
								label,
								disabled,
								onChange: (on) => {
									write(on ? initialEntries : void 0);
								}
							})
						]
					}),
					claude
						? (0, react_jsx_runtime.jsx)(ClaudeAdaptiveThinking, {
								model,
								inherited: adaptiveFallback,
								position,
								disabled,
								t,
								onChange
							})
						: null,
					entries === void 0
						? null
						: (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
								children: [
									entries.length > 0
										? (0, react_jsx_runtime.jsxs)("div", {
												className: ModelsSection_module_css_default["modelReasoningRow"],
												"aria-hidden": "true",
												children: [
													(0, react_jsx_runtime.jsx)("span", {
														className: ModelsSection_module_css_default["modelFieldLabel"],
														children: t("modelReasoningLevel")
													}),
													(0, react_jsx_runtime.jsx)("span", {
														className: ModelsSection_module_css_default["modelFieldLabel"],
														children: t("modelReasoningValue")
													})
												]
											})
										: null,
									entries.map(([level, wire], index) =>
										(0, react_jsx_runtime.jsxs)(
											"div",
											{
												className: ModelsSection_module_css_default["modelReasoningRow"],
												children: [
													(0, react_jsx_runtime.jsx)("select", {
														className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["selectInput"]}`,
														value: level,
														"aria-label": `${t("modelReasoningLevel")} ${String(index + 1)}`,
														disabled,
														onChange: (event) => {
															changeLevel(entries, index, level, wire, event.target.value);
														},
														children: choicesFor(level).map((choice) =>
															(0, react_jsx_runtime.jsx)("option", { value: choice, children: choice }, choice)
														)
													}),
													(0, react_jsx_runtime.jsx)("input", {
														className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["modelReasoningValueInput"]}`,
														type: "text",
														value: typing?.level === level ? typing.text : typeof wire === "string" ? wire : "",
														placeholder: level === "off" ? t("modelReasoningOffValuePlaceholder") : level,
														"aria-label": `${level} ${t("modelReasoningValue")}`,
														"aria-invalid": !acceptedValue(level, wire),
														disabled: disabled || level === "off" || levelsOnly,
														onChange: (event) => {
															editValue(entries, index, level, event.target.value);
														},
														onBlur: () => {
															leaveValue(entries, index, level, wire);
														}
													}),
													(0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: `${ModelsSection_module_css_default["iconButton"]} ${ModelsSection_module_css_default["iconButtonDanger"]}`,
														"aria-label": `${t("modelReasoningRemove")} ${level}`,
														title: t("modelReasoningRemove"),
														disabled,
														onClick: () => {
															write(entries.filter((_entry, at) => at !== index));
														},
														children: (0, react_jsx_runtime.jsx)(
															_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular,
															{ size: 14 }
														)
													})
												]
											},
											index
										)
									),
									outside
										? (0, react_jsx_runtime.jsx)("p", {
												className: ModelsSection_module_css_default["error"],
												children: t("modelReasoningLevelsOnly")
											})
										: refused
											? (0, react_jsx_runtime.jsx)("p", {
													className: ModelsSection_module_css_default["error"],
													children: t("modelReasoningValueRequired")
												})
											: missingLevel
												? (0, react_jsx_runtime.jsx)("p", {
														className: ModelsSection_module_css_default["error"],
														children: t("modelReasoningNeedsLevel")
													})
												: null,
									(0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: ModelsSection_module_css_default["addModelButton"],
										disabled: disabled || levels.every((level) => used.includes(level)),
										onClick: () => {
											addLevel(entries);
										},
										children: [
											(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {
												size: 14
											}),
											t("modelReasoningAdd")
										]
									})
								]
							})
				]
			});
		}
		function rowHalf(event) {
			const rect = event.currentTarget.getBoundingClientRect();
			return event.clientY < rect.top + rect.height / 2 ? "before" : "after";
		}
		function ModelRow(props) {
			const { model, position, t, disabled } = props;
			const preview = (0, _deepseek_ai_dsh_client_ui_primitives.useRowDragPreview)(
				ModelsSection_module_css_default["modelDragPreview"]
			);
			const modelField = (field) =>
				(0, react_jsx_runtime.jsxs)("label", {
					className: `${ModelsSection_module_css_default["modelField"]} ${field === "name" ? ModelsSection_module_css_default["modelName"] : ""}`,
					children: [
						field === "name"
							? (0, react_jsx_runtime.jsx)("span", {
									className: `${ModelsSection_module_css_default["modelFieldLabel"]} ${ModelsSection_module_css_default["modelNameLabel"]}`,
									children: t("modelName")
								})
							: null,
						(0, react_jsx_runtime.jsx)("input", {
							className: ModelsSection_module_css_default["input"],
							type: "text",
							value: typeof model[field] === "string" ? model[field] : "",
							placeholder: t(field === "id" ? "modelId" : "modelName"),
							"aria-label": `${t(field === "id" ? "modelId" : "modelName")} ${String(position)}`,
							disabled,
							onFocus: field === "name" && !props.expanded ? props.onToggle : void 0,
							onChange: (event) => {
								const value = event.target.value;
								props.onFieldChange(field, field === "name" && value === "" ? void 0 : value);
							},
							onBlur: field === "id" ? (event) => props.onIdBlur?.(event.target.value) : void 0
						})
					]
				});
			return (0, react_jsx_runtime.jsx)("div", {
				className: ModelsSection_module_css_default["modelEntry"],
				"data-row-key": props.rowKey,
				"data-dragging": props.order.dragging || void 0,
				"data-drop-target": props.order.dragging ? void 0 : props.order.target,
				onDragOver: (event) => {
					if (!props.order.canDrop) return;
					event.preventDefault();
					event.dataTransfer.dropEffect = "move";
					props.order.onOver(rowHalf(event));
				},
				onDragLeave: (event) => {
					if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
					props.order.onLeave();
				},
				onDrop: (event) => {
					if (!props.order.canDrop) return;
					event.preventDefault();
					props.order.onDrop(rowHalf(event));
				},
				children: (0, react_jsx_runtime.jsxs)("div", {
					className: ModelsSection_module_css_default["modelRow"],
					"data-expanded": props.expanded || void 0,
					children: [
						(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
							label: t("reorderModelHelp"),
							portal: true,
							children: (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${ModelsSection_module_css_default["iconButton"]} ${ModelsSection_module_css_default["modelDragHandle"]}`,
								"aria-label": `${t("reorderModel")} ${String(position)}`,
								"aria-keyshortcuts": "ArrowUp ArrowDown",
								"aria-description": t("reorderModelHelp"),
								disabled,
								draggable: !disabled,
								onDragStart: (event) => {
									event.dataTransfer.effectAllowed = "move";
									event.dataTransfer.setData("application/x-dsh-model-order", String(position));
									props.order.onStart();
									preview.start(event, event.currentTarget.closest("[data-row-key]"));
								},
								onDragEnd: () => {
									if (preview.clear()) props.order.onEnd();
								},
								onKeyDown: (event) => {
									if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
									event.preventDefault();
									event.stopPropagation();
									props.order.onMove(event.key === "ArrowUp" ? -1 : 1);
								},
								children: (0, react_jsx_runtime.jsx)(
									_deepseek_ai_dsh_client_ui_primitives.IconDragHandleOutlineRegular,
									{ size: 14 }
								)
							})
						}),
						modelField("id"),
						(0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: ModelsSection_module_css_default["iconButton"],
							"aria-label": `${t("modelAdvanced")} ${String(position)}`,
							"aria-expanded": props.expanded,
							title: t("modelAdvanced"),
							onClick: (event) => {
								event.currentTarget.focus();
								props.onToggle();
							},
							children: props.expanded
								? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
								: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, {})
						}),
						(0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${ModelsSection_module_css_default["iconButton"]} ${ModelsSection_module_css_default["iconButtonDanger"]}`,
							"aria-label": `${t("removeModel")} ${String(position)}`,
							title: t("removeModel"),
							disabled,
							onClick: props.onRemove,
							children: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {
								size: 14
							})
						}),
						modelField("name"),
						props.expanded
							? (0, react_jsx_runtime.jsxs)("div", {
									className: ModelsSection_module_css_default["modelAdvanced"],
									children: [
										["contextWindow", "maxTokens"].map((field) =>
											(0, react_jsx_runtime.jsxs)(
												"label",
												{
													className: ModelsSection_module_css_default["modelField"],
													children: [
														(0, react_jsx_runtime.jsx)("span", {
															className: ModelsSection_module_css_default["modelFieldLabel"],
															children: t(field)
														}),
														(0, react_jsx_runtime.jsx)("input", {
															className: ModelsSection_module_css_default["input"],
															type: "text",
															inputMode: "numeric",
															value: props[field].value,
															placeholder: props[field].placeholder,
															"aria-label": `${t(field)} ${String(position)}`,
															disabled,
															onChange: (event) => {
																props[field].onChange(event.target.value);
															},
															onBlur: props[field].onBlur
														})
													]
												},
												field
											)
										),
										(0, react_jsx_runtime.jsx)(ModelInputTypes, {
											model,
											field: props.inputField,
											position,
											fallback: props.inputFallback,
											disabled: disabled || props.inputLoading === true,
											t,
											onChange: props.onChange
										}),
										props.reasoningLevels !== void 0 && props.reasoningLevels.length > 0
											? (0, react_jsx_runtime.jsx)(ModelReasoningEfforts, {
													model,
													levels: props.reasoningLevels,
													claude: props.thinkingPresets === true,
													adaptiveFallback: props.adaptiveFallback,
													levelsOnly: props.reasoningLevelsOnly === true,
													position,
													disabled,
													t,
													onChange: props.onChange
												})
											: null
									]
								})
							: null
					]
				})
			});
		}
		function createRow(key) {
			return { key, expanded: false, editing: new Map() };
		}
		function useModelRows(models, onChange, disabled) {
			const nextKey = (0, react.useRef)(0);
			const [stored, setRows] = (0, react.useState)(() => models.map(() => createRow(nextKey.current++)));
			const [dragged, setDragged] = (0, react.useState)();
			const [target, setTarget] = (0, react.useState)();
			const entries = models.map((model, index) => ({ model, state: stored[index] ?? createRow(nextKey.current++) }));
			const rows = entries.map((entry) => entry.state);
			if (stored.length !== models.length) setRows(rows);
			const endDrag = () => {
				setDragged(void 0);
				setTarget(void 0);
			};
			const move = (from, to) => {
				if (disabled || from === to || from < 0 || to < 0 || to >= models.length) return;
				const order = [...entries];
				const moved = order.splice(from, 1);
				order.splice(to, 0, ...moved);
				setRows(order.map((entry) => entry.state));
				onChange(order.map((entry) => entry.model));
			};
			return {
				rows: entries.map(({ model, state }, index) => ({
					...state,
					model,
					order: {
						dragging: dragged === state.key,
						target: target?.key === state.key ? target.half : void 0,
						canDrop: !disabled && dragged !== void 0,
						onStart: () => {
							setDragged(state.key);
						},
						onEnd: endDrag,
						onOver: (half) => {
							setTarget((current) =>
								current?.key === state.key && current.half === half ? current : { key: state.key, half }
							);
						},
						onLeave: () => {
							setTarget((current) => (current?.key === state.key ? void 0 : current));
						},
						onDrop: (half) => {
							const from = rows.findIndex((row) => row.key === dragged);
							const insertion = index + (half === "after" ? 1 : 0);
							move(from, insertion > from ? insertion - 1 : insertion);
							endDrag();
						},
						onMove: (offset) => {
							move(index, index + offset);
						}
					}
				})),
				toggle: (index) => {
					setRows(rows.map((row, at) => (at === index ? { ...row, expanded: !row.expanded } : row)));
				},
				edit: (index, field, text) => {
					setRows(
						rows.map((row, at) => {
							if (at !== index) return row;
							const editing = new Map(row.editing);
							if (text === void 0) editing.delete(field);
							else editing.set(field, text);
							return { ...row, editing };
						})
					);
				},
				forget: (removed) => {
					setRows(rows.filter((_row, index) => !removed.has(index)));
					endDrag();
				},
				reset: () => {
					setRows(models.map(() => createRow(nextKey.current++)));
					endDrag();
				}
			};
		}
		const CAPACITY_PATTERN = /^(\d+(?:\.\d+)?)([km])?$/i;
		const CAPACITY_SCALE = { k: 1e3, m: 1e6 };
		function parseCapacity(text) {
			const trimmed = text.trim();
			if (trimmed.length === 0) return void 0;
			const match = CAPACITY_PATTERN.exec(trimmed);
			if (match === null) return NaN;
			const suffix = match[2]?.toLowerCase();
			const scale = suffix === "k" || suffix === "m" ? CAPACITY_SCALE[suffix] : 1;
			const scaled = Number(match[1]) * scale;
			const rounded = Math.round(scaled);
			return Math.abs(scaled - rounded) < 1e-6 ? rounded : scaled;
		}
		function formatCapacity(value) {
			if (!Number.isInteger(value) || value <= 0) return String(value);
			if (value % CAPACITY_SCALE.m === 0) return `${String(value / CAPACITY_SCALE.m)}M`;
			if (value % CAPACITY_SCALE.k === 0) return `${String(value / CAPACITY_SCALE.k)}K`;
			return String(value);
		}
		function modelDrafts(value) {
			if (!Array.isArray(value)) return [];
			return value.map((entry) => (typeof entry === "object" && entry !== null && !Array.isArray(entry) ? entry : {}));
		}
		function validateDeepSeekModels(value) {
			if (value === void 0) return void 0;
			const models = modelDrafts(value);
			const seen = new Set();
			for (const [index, model] of models.entries()) {
				const id = model["id"];
				const trimmed = typeof id === "string" ? id.trim() : void 0;
				if (trimmed === void 0 || trimmed.length === 0) return { index, key: "modelIdRequired" };
				if (seen.has(trimmed)) return { index, key: "modelIdDuplicate" };
				seen.add(trimmed);
				const name = model["name"];
				if (name !== void 0 && (typeof name !== "string" || name.length === 0))
					return { index, key: "modelNameInvalid" };
				const contextWindow = model["contextWindow"];
				if (
					contextWindow !== void 0 &&
					(typeof contextWindow !== "number" || !Number.isInteger(contextWindow) || contextWindow <= 0)
				)
					return { index, key: "modelContextInvalid" };
				const maxTokens = model["maxTokens"];
				if (maxTokens !== void 0 && (typeof maxTokens !== "number" || !Number.isInteger(maxTokens) || maxTokens <= 0))
					return { index, key: "modelMaxTokensInvalid" };
			}
		}
		function DeepSeekModelsEditor(props) {
			const rowState = useModelRows(props.models, props.onChange, props.disabled);
			const update = (index, key, value) => {
				const next = props.models.map((model, at) => {
					const copy = { ...model };
					if (at !== index) return copy;
					if (value === void 0) Reflect.deleteProperty(copy, key);
					else copy[key] = value;
					return copy;
				});
				props.onChange(next);
			};
			const remove = (index) => {
				rowState.forget(new Set([index]));
				props.onChange(props.models.filter((_model, at) => at !== index).map((model) => ({ ...model })));
			};
			const reset = () => {
				rowState.reset();
				props.onReset();
			};
			const capacityText = (model, index, field) => {
				const typed = rowState.rows[index]?.editing.get(field);
				if (typed !== void 0) return typed;
				const value = model[field];
				return typeof value === "number" ? formatCapacity(value) : "";
			};
			const settleCapacity = (index, field) => {
				const typed = rowState.rows[index]?.editing.get(field);
				if (typed === void 0) return;
				const parsed = parseCapacity(typed);
				if (parsed !== void 0 && Number.isNaN(parsed)) return;
				rowState.edit(index, field, void 0);
			};
			const capacityInput = (model, index, field, fallback) => ({
				value: capacityText(model, index, field),
				placeholder:
					fallback === void 0
						? props.t(field === "contextWindow" ? "contextWindowPlaceholder" : "maxTokensPlaceholder")
						: formatCapacity(fallback),
				onChange: (text) => {
					rowState.edit(index, field, text);
					update(index, field, parseCapacity(text));
				},
				onBlur: () => {
					settleCapacity(index, field);
				}
			});
			return (0, react_jsx_runtime.jsxs)("section", {
				className: ModelsSection_module_css_default["modelCatalog"],
				"aria-label": props.t("models"),
				children: [
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["modelListHead"],
						children: [
							(0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_css_default["modelCatalogHeading"],
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										className: ModelsSection_module_css_default["modelCatalogTitle"],
										children: props.t("models")
									}),
									(0, react_jsx_runtime.jsx)("span", {
										className: ModelsSection_module_css_default["modelCatalogMeta"],
										children: props.overridden ? props.t("modelsCustomized") : props.t("modelsInherited")
									})
								]
							}),
							props.overridden
								? (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelsSection_module_css_default["linkButton"],
										disabled: props.disabled,
										onClick: reset,
										children: props.t("resetModels")
									})
								: null
						]
					}),
					(0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.AnimatedRows, {
						className: ModelsSection_module_css_default["modelList"],
						rowKeys: rowState.rows.map((row) => String(row.key)),
						ready: true,
						resetKey: "",
						children: [
							props.models.length === 0
								? (0, react_jsx_runtime.jsx)("p", {
										className: ModelsSection_module_css_default["modelEmpty"],
										children: props.t("modelsEmpty")
									})
								: null,
							rowState.rows.map(({ model, key, expanded, order }, index) =>
								(0, react_jsx_runtime.jsx)(
									ModelRow,
									{
										rowKey: key,
										order,
										model,
										position: index + 1,
										inputField: "inputModalities",
										expanded,
										disabled: props.disabled,
										t: props.t,
										contextWindow: capacityInput(model, index, "contextWindow", props.defaultContextWindow),
										maxTokens: capacityInput(model, index, "maxTokens", props.defaultMaxTokens),
										onFieldChange: (field, value) => {
											update(index, field, value);
										},
										onIdBlur: (value) => {
											const trimmed = value.trim();
											if (trimmed !== value) update(index, "id", trimmed);
										},
										onChange: (next) => {
											props.onChange(props.models.map((row, at) => (at === index ? next : row)));
										},
										onToggle: () => {
											rowState.toggle(index);
										},
										onRemove: () => {
											remove(index);
										}
									},
									key
								)
							)
						]
					}),
					(0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: ModelsSection_module_css_default["addModelButton"],
						disabled: props.disabled,
						onClick: () => {
							props.onChange([...props.models.map((model) => ({ ...model })), { id: "" }]);
						},
						children: [
							(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }),
							props.t("addModel")
						]
					})
				]
			});
		}
		function single(search, target) {
			if (!search || !target) return null;
			let query = getQuery(search);
			if (!isPrepared(target)) target = getPrepared(target);
			if ((query.bitflags & target._bitflags) !== query.bitflags) return null;
			let result =
				!query.hasSpace && query.lowerCodes.length === 2 ? algorithm2(query, target) : algorithm(query, target);
			return result && materialize(result);
		}
		function go(search, targets, options) {
			if (targets instanceof SnapshotTargets) return goSnapshot(search, targets, options);
			let key = options?.key;
			let keys = !key && options?.keys;
			let firstTarget = targets[0];
			if (!key && !keys && typeof firstTarget === "object" && firstTarget !== null && !isPrepared(firstTarget))
				throw new Error("fuzzysort: key or keys is required when searching object targets");
			if (!search) return all(targets, options);
			let query = getQuery(search);
			if (keys) return goKeys(query, targets, options);
			let searchBitflags = query.bitflags;
			let twoChar = !query.hasSpace && query.lowerCodes.length === 2;
			let threshold = denormalizeScore(options?.threshold ?? 0.5);
			let limit = getLimit(options);
			let scoreFn = options?.scoreFn;
			let resultCount = 0;
			let limited = 0;
			let getter = key && makeGetter(key);
			for (let i = 0; i < targets.length; i++) {
				let obj = targets[i];
				let target = key ? (getter === null ? obj[key] : getter(obj)) : obj;
				if (!target) continue;
				if (!isPrepared(target)) target = getPrepared(target);
				if ((searchBitflags & target._bitflags) !== searchBitflags) continue;
				let result = twoChar ? algorithm2(query, target) : algorithm(query, target);
				if (result === null) continue;
				let resultScore = result._score;
				if (scoreFn) {
					result = materialize(result, key ? obj : void 0);
					resultScore = scoreFn(result);
					if (!resultScore) continue;
					result._score = resultScore = denormalizeScore(resultScore);
				}
				if (resultScore < threshold) continue;
				let room = resultCount < limit;
				if (room) resultCount++;
				else {
					limited++;
					if (resultScore <= heap.peek()._score) continue;
				}
				if (!scoreFn) result = materialize(result, key ? obj : void 0);
				room ? heap.add(result) : heap.replaceTop(result);
			}
			return finishResults(resultCount, limited);
		}
		function highlight(result, open = "<b>", close = "</b>", threshold = 0.5) {
			let callback = typeof open === "function" ? open : null;
			let target = result.target;
			if (
				result._bestKeyScore !== void 0 &&
				normalizeScore(result._score) < normalizeScore(result._bestKeyScore) * threshold
			)
				return callback ? [target] : target;
			let raw = result._indexes;
			let indexes = raw === void 0 ? result.indexes : raw.slice(0, raw.len ?? raw.length).sort((a, b) => a - b);
			if (!indexes.length) return callback ? [target] : target;
			let output = callback ? [] : "";
			let lastIndex = 0;
			let matchI = 0;
			for (let i = 0; i < indexes.length;) {
				let start = indexes[i++];
				let end = start + 1;
				while (indexes[i] === end) {
					i++;
					end++;
				}
				let before = target.slice(lastIndex, start);
				let match = target.slice(start, end);
				if (callback) output.push(before, callback(match, matchI++));
				else output += before + open + match + close;
				lastIndex = end;
			}
			if (callback) output.push(target.slice(lastIndex));
			else output += target.slice(lastIndex);
			return output;
		}
		function score(result) {
			let value = result.score;
			return value === void 0 ? normalizeScore(result._score) : value;
		}
		function remap(mappings) {
			for (let char in mappings) {
				remappings[char] = mappings[char];
				if (char.charCodeAt(0) < 128) customAsciiRemappings = true;
			}
			cleanup();
		}
		function prepare(target) {
			return prepTarget(target);
		}
		function snapshot(targets, options) {
			return new SnapshotTargets(targets, options);
		}
		function cleanup() {
			targetCache.clear();
			searchCache.clear();
			heap.clear();
			simpleMatch = [];
			strictMatch = [];
			seen = [];
			seenAt = [];
			changes = [];
			partials = [];
			spaceScores = [];
			partIndexes = [];
			winnerIndexes = [];
			winnerScores = [];
			winnerKeys = [];
			keyTargets = [];
			keyResults = [];
			candidateBitOffsets = [];
			seenGeneration = 0;
		}
		function goSnapshotValues(search, snapshot, options, singleChar) {
			let targets = snapshot._targets;
			let objects = snapshot._objects;
			let threshold = denormalizeScore(options?.threshold ?? 0.5);
			let limit = getLimit(options);
			let scoreFn = options?.scoreFn;
			let searchLen = search.lowerCodes.length;
			let shortSearch = !search.hasSpace && searchLen <= 3;
			let twoChar = !search.hasSpace && searchLen === 2;
			let rows = snapshot._candidateRows;
			let rowsLength = snapshot._candidateLength;
			let matchedRows = snapshot._rows;
			let matchedCount = 0;
			let resultCount = 0;
			let limited = 0;
			for (let n = 0; n < rowsLength; n++) {
				let i = rows === null ? n : rows[n];
				let target = targets[i];
				if (target === noTarget || (search.bitflags & target._bitflags) !== search.bitflags) continue;
				let targetShort = shortSearch && target.target.length < 65535;
				let cutoff = !scoreFn && threshold === -INF && resultCount >= limit ? heap.peek()._score : -INF;
				let result;
				if (singleChar && targetShort) result = algorithm1(search, target, snapshot._first, i);
				else if (twoChar && targetShort) {
					let start = snapshot._offsets[i];
					let end = snapshot._offsets[i + 1];
					result = algorithm2(search, target, snapshot._beginnings, start, end, cutoff);
				} else if (twoChar) result = algorithm2(search, target, null, 0, 0, cutoff);
				else if (targetShort) {
					let start = snapshot._offsets[i];
					let end = snapshot._offsets[i + 1];
					result = algorithm(search, target, false, false, false, true, snapshot._beginnings, start, end, cutoff);
				} else result = algorithm(search, target, false, false, false, true, null, 0, 0, cutoff);
				if (result === null) continue;
				matchedRows[matchedCount++] = i;
				if (result === prunedMatch) {
					limited++;
					continue;
				}
				let resultScore = result._score;
				if (scoreFn) {
					result = materialize(result, objects?.[i]);
					resultScore = scoreFn(result);
					if (!resultScore) continue;
					result._score = resultScore = denormalizeScore(resultScore);
				}
				if (resultScore < threshold) continue;
				let room = resultCount < limit;
				if (room) resultCount++;
				else {
					limited++;
					if (resultScore <= heap.peek()._score) continue;
				}
				if (objects && !scoreFn) result = materialize(result, objects[i]);
				room ? heap.add(result) : heap.replaceTop(result);
			}
			snapshot._matchedRowsLen = matchedCount;
			return finishResults(resultCount, limited, !objects && !scoreFn && materialize);
		}
		function goSnapshot(search, snapshot, options) {
			if (options?.key || options?.keys)
				throw new Error("fuzzysort: key/keys must be provided to snapshot(), not go()");
			snapshot._finish();
			if (!search) return allSnapshot(snapshot, options);
			let query = getQuery(search);
			let backtrack = snapshot._backtrack(query, options);
			if (backtrack) return backtrack;
			snapshot._beginSearch(query);
			try {
				let results;
				if (snapshot._mode < 2) {
					let searchLen = query.lowerCodes.length;
					let code = query.lowerCodes[0];
					results = goSnapshotValues(query, snapshot, options, searchLen === 1 && code >= 97 && code <= 122);
				} else results = goKeys(query, snapshot._objects, options, snapshot);
				snapshot._endSearch(query);
				snapshot._remember(query, results, options);
				return results;
			} catch (error) {
				snapshot._resetSearch();
				throw error;
			}
		}
		function goKeys(query, objects, options, snapshot) {
			let indexed = snapshot !== void 0;
			let keys = indexed ? null : options.keys;
			let getters = indexed ? null : keys.map(makeGetter);
			let targets = indexed ? snapshot._targets : null;
			let keysLength = indexed ? snapshot._keysLength : keys.length;
			let searchBitflags = query.bitflags;
			let hasSpace = query.hasSpace;
			let spaceCount = query.parts.length;
			let threshold = denormalizeScore(options?.threshold ?? 0.5);
			let limit = getLimit(options);
			let searchLen = query.lowerCodes.length;
			let short = indexed && !hasSpace && searchLen <= 3;
			let twoChar = !hasSpace && searchLen === 2;
			let code = query.lowerCodes[0];
			let singleChar = short && searchLen === 1 && code >= 97 && code <= 122;
			let scoreFn = options?.scoreFn;
			let deferMaterialization = indexed && !scoreFn && (limit !== INF || threshold > -INF);
			let rows = indexed ? snapshot._candidateRows : null;
			let rowsLength = indexed ? snapshot._candidateLength : objects.length;
			let matchedRows = indexed ? snapshot._rows : null;
			let matchedCount = 0;
			let resultCount = 0;
			let limited = 0;
			outer: for (let n = 0; n < rowsLength; n++) {
				let i = rows === null ? n : rows[n];
				let row = i * keysLength;
				if (indexed) {
					if ((searchBitflags & snapshot._bitflags[i]) !== searchBitflags) continue;
				} else {
					let obj = objects[i];
					let keysBitflags = 0;
					for (let k = 0; k < keysLength; k++) {
						let target = getters[k] === null ? obj[keys[k]] : getters[k](obj);
						if (!target) target = noTarget;
						else if (!isPrepared(target)) target = getPrepared(target);
						keyTargets[k] = target;
						keysBitflags |= target._bitflags;
					}
					if ((searchBitflags & keysBitflags) !== searchBitflags) continue;
				}
				if (hasSpace)
					for (let s = 0; s < spaceCount; s++) {
						spaceScores[s] = winnerScores[s] = -INF;
						winnerKeys[s] = -1;
					}
				for (let k = 0; k < keysLength; k++) {
					let target = indexed ? targets[row + k] : keyTargets[k];
					if (target === noTarget) {
						keyResults[k] = noTarget;
						continue;
					}
					if (hasSpace && indexed) {
						let possible = false;
						for (let s = 0; s < spaceCount; s++) {
							let partBitflags = query.parts[s].bitflags;
							if ((partBitflags & target._bitflags) === partBitflags) {
								possible = true;
								break;
							}
						}
						if (!possible) {
							keyResults[k] = noTarget;
							continue;
						}
					} else if (!hasSpace && (searchBitflags & target._bitflags) !== searchBitflags) {
						keyResults[k] = noTarget;
						continue;
					}
					let match;
					if (indexed) {
						let valueRow = row + k;
						let targetShort = short && target.target.length < 65535;
						if (singleChar && targetShort) match = algorithm1(query, target, snapshot._first, valueRow);
						else if (twoChar && targetShort) {
							let start = snapshot._offsets[valueRow];
							let end = snapshot._offsets[valueRow + 1];
							match = algorithm2(query, target, snapshot._beginnings, start, end);
						} else if (twoChar) match = algorithm2(query, target);
						else if (targetShort) {
							let start = snapshot._offsets[valueRow];
							let end = snapshot._offsets[valueRow + 1];
							match = algorithm(query, target, false, false, false, true, snapshot._beginnings, start, end);
						} else match = algorithm(query, target, false, hasSpace);
					} else match = twoChar ? algorithm2(query, target) : algorithm(query, target, false, hasSpace);
					if (match === null) {
						keyResults[k] = noTarget;
						continue;
					}
					keyResults[k] = deferMaterialization ? match : materialize(match);
					if (hasSpace) {
						mergePartScores(spaceCount);
						for (let s = 0; s < spaceCount; s++) {
							let partScore = partials[s];
							if (partScore <= winnerScores[s]) continue;
							winnerScores[s] = partScore;
							winnerKeys[s] = k;
							let source = partIndexes[s];
							let winner = (winnerIndexes[s] ||= []);
							winner.length = source.length;
							for (let j = 0; j < source.length; j++) winner[j] = source[j];
						}
					}
				}
				if (hasSpace) {
					for (let s = 0; s < spaceCount; s++)
						if (winnerKeys[s] !== -1) appendIndexes(keyResults[winnerKeys[s]]._indexes, winnerIndexes[s]);
				}
				let resultScore;
				if (hasSpace) {
					resultScore = 0;
					for (let s = 0; s < spaceCount; s++) {
						let partScore = spaceScores[s];
						if (partScore === -INF) continue outer;
						resultScore += partScore;
					}
				} else {
					resultScore = mergeScores(keyResults, keysLength);
					if (resultScore === -INF) continue;
				}
				if (indexed) matchedRows[matchedCount++] = i;
				let result = deferMaterialization
					? null
					: captureKeysResult(keyResults, keysLength, objects[i], resultScore, hasSpace);
				if (scoreFn) {
					resultScore = scoreFn(result);
					if (!resultScore) continue;
					result._score = resultScore = denormalizeScore(resultScore);
				}
				if (resultScore < threshold) continue;
				let room = resultCount < limit;
				if (room) resultCount++;
				else {
					limited++;
					if (resultScore <= heap.peek()._score) continue;
				}
				if (result === null) result = captureKeysResult(keyResults, keysLength, objects[i], resultScore, hasSpace);
				room ? heap.add(result) : heap.replaceTop(result);
			}
			if (indexed) snapshot._matchedRowsLen = matchedCount;
			return finishResults(resultCount, limited, deferMaterialization && materializeKeys);
		}
		function allSnapshot(snapshot, options) {
			let results = [];
			let targets = snapshot._targets;
			let objects = snapshot._objects;
			let keysLength = snapshot._keysLength;
			let total = keysLength === void 0 ? targets.length : objects.length;
			results.total = total;
			let limit = getLimit(options);
			for (let i = 0, length = Math.min(total, limit); i < length; i++) {
				if (keysLength === void 0) {
					results.push(newResult(targets[i].target, -INF, objects?.[i]));
					continue;
				}
				let row = i * keysLength;
				for (let k = 0; k < keysLength; k++) {
					let target = targets[row + k];
					keyResults[k] = target === noTarget ? noTarget : newResult(target.target, -INF);
				}
				results.push(captureKeysResult(keyResults, keysLength, objects[i], -INF));
			}
			return results;
		}
		function all(targets, options) {
			let results = [];
			results.total = targets.length;
			let limit = getLimit(options);
			let key = options?.key;
			let keys = !key && options?.keys;
			if (keys) {
				let getters = keys.map(makeGetter);
				for (let obj of targets) {
					for (let k = keys.length - 1; k >= 0; k--) {
						let target = getters[k] === null ? obj[keys[k]] : getters[k](obj);
						if (!target) keyResults[k] = noTarget;
						else {
							if (!isPrepared(target)) target = getPrepared(target);
							target._score = -INF;
							target._indexes.len = 0;
							keyResults[k] = target;
						}
					}
					results.push(captureKeysResult(keyResults, keys.length, obj, -INF));
					if (results.length >= limit) break;
				}
				return results;
			}
			let getter = key && makeGetter(key);
			for (let obj of targets) {
				let target = key ? (getter === null ? obj[key] : getter(obj)) : obj;
				if (target == null) continue;
				if (!isPrepared(target)) target = getPrepared(target);
				if (key) target = newResult(target.target, -INF, obj);
				else {
					target._score = -INF;
					target._indexes.len = 0;
				}
				results.push(target);
				if (results.length >= limit) break;
			}
			return results;
		}
		function finishResults(length, limited, transform) {
			if (!length) return noResults;
			let results = new Array(length);
			for (let i = length - 1; i >= 0; i--) {
				let result = heap.poll();
				if (transform) result = transform(result);
				if (result instanceof KeysResult && !result._partWinners) markBestKeyScore(result);
				results[i] = result;
			}
			results.total = length + limited;
			return results;
		}
		function materializeKeys(result) {
			for (let k = 0; k < result.length; k++) if (result[k] !== noTarget) result[k] = materialize(result[k]);
			return result;
		}
		function algorithm1(search, target, firstTable, row) {
			let matchI = target._targetLower.indexOf(search._lower);
			if (matchI === -1) return null;
			let beginning = firstTable[row * 26 + search.lowerCodes[0] - 97];
			let strict = beginning !== 0;
			if (strict) matchI = beginning - 1;
			let score = matchI === 0 ? 0 : -matchI * matchI * 0.2;
			if (!strict) score *= 1e3;
			else if (target._beginningsLen > 24) score *= (target._beginningsLen - 24) * 10;
			target._score = score - target._targetLowerCodes.length + 1;
			target._indexes[0] = matchI;
			target._indexes.len = 1;
			return target;
		}
		function algorithm2(search, target, beginnings = null, start = 0, end = 0, cutoff = -INF) {
			let targetCodes = target._targetLowerCodes;
			let targetLen = targetCodes.length;
			let firstCode = search.lowerCodes[0];
			let secondCode = search.lowerCodes[1];
			let first = 0;
			while (targetCodes[first] !== firstCode) if (++first >= targetLen) return null;
			let second = first + 1;
			while (targetCodes[second] !== secondCode) if (++second >= targetLen) return null;
			if (cutoff !== -INF && scoreCeiling(2, targetLen) <= cutoff) return prunedMatch;
			if (beginnings === null) {
				beginnings = target._beginnings;
				if (beginnings === null) target._beginnings = beginnings = makeBeginnings(target);
				end = beginnings.length;
			}
			let substringI = target._targetLower.indexOf(search._lower, first);
			let substring = substringI !== -1;
			let low = lowerBound(beginnings, start, end, substringI);
			let substringStart = substring && low < end && beginnings[low] === substringI;
			let strict = substringStart && substringI === first;
			if (!strict) {
				let firstBeginning = start;
				while (firstBeginning < end && beginnings[firstBeginning] < first) firstBeginning++;
				for (let backtracks = 0; firstBeginning < end;) {
					let strictFirst = beginnings[firstBeginning];
					if (targetCodes[strictFirst] !== firstCode) {
						firstBeginning++;
						continue;
					}
					let consecutive = strictFirst + 1;
					if (targetCodes[consecutive] === secondCode) {
						first = strictFirst;
						second = consecutive;
						strict = true;
						break;
					}
					let secondBeginning = firstBeginning + 1;
					while (secondBeginning < end && beginnings[secondBeginning] <= consecutive) secondBeginning++;
					while (secondBeginning < end && targetCodes[beginnings[secondBeginning]] !== secondCode) secondBeginning++;
					if (secondBeginning < end) {
						first = strictFirst;
						second = beginnings[secondBeginning];
						strict = true;
						break;
					}
					if (++backtracks > 200) break;
					firstBeginning++;
				}
			}
			if (substring && !substringStart) {
				while (low < end && beginnings[low] <= substringI) low++;
				for (; low < end; low++) {
					let index = beginnings[low];
					if (targetCodes[index] === firstCode && targetCodes[index + 1] === secondCode) {
						substringI = index;
						substringStart = true;
						break;
					}
				}
			}
			if (substring && (!strict || substringStart)) {
				first = substringI;
				second = substringI + 1;
			}
			let resultScore = second - first === 1 ? 0 : first - second * 2 - 11;
			if (first) resultScore -= first * first * 0.2;
			if (!strict) resultScore *= 1e3;
			else if (end - start > 24) resultScore *= (end - start - 24) * 10;
			let lengthPenalty = (targetLen - 2) / 2;
			resultScore -= lengthPenalty;
			if (substring) resultScore /= 5;
			if (substringStart) resultScore /= 5;
			resultScore -= lengthPenalty;
			target._score =
				substring &&
				second === first + 1 &&
				(second + 1 === targetLen || isBeginning(beginnings, start, end, second + 1))
					? resultScore + Math.min(4, -resultScore / 2)
					: resultScore;
			target._indexes[0] = first;
			target._indexes[1] = second;
			target._indexes.len = 2;
			return target;
		}
		function algorithm(
			search,
			target,
			spaces = false,
			partial = false,
			changed = false,
			singleMatch = true,
			beginnings = null,
			start = 0,
			end = 0,
			cutoff = -INF
		) {
			if (!spaces && search.hasSpace) return algorithmSpaces(search, target, partial);
			let searchCodes = search.lowerCodes;
			let targetCodes = target._targetLowerCodes;
			let searchLen = searchCodes.length;
			let targetLen = targetCodes.length;
			let searchCode = searchCodes[0];
			let searchI = 0;
			let targetI = 0;
			for (;;) {
				if (searchCode === targetCodes[targetI]) {
					simpleMatch[searchI] = targetI;
					if (++searchI === searchLen) break;
					searchCode = searchCodes[searchI];
				}
				if (++targetI >= targetLen) return null;
			}
			if (cutoff !== -INF && searchLen > 1 && scoreCeiling(searchLen, targetLen) <= cutoff) return prunedMatch;
			if (searchLen === 1 && !changed && singleMatch) {
				let matchI;
				let strict;
				if (target._singleMatchCode === searchCode) {
					matchI = target._singleMatchIndex;
					strict = target._singleMatchStrict;
				} else if (target._nextBeginningIndexes !== null) {
					let next = target._nextBeginningIndexes;
					targetI = simpleMatch[0] === 0 ? 0 : next[simpleMatch[0] - 1];
					while (targetI < targetLen && searchCode !== targetCodes[targetI]) targetI = next[targetI];
					strict = targetI < targetLen;
					matchI = strict ? targetI : simpleMatch[0];
				} else {
					prepareSingleMatch(target, searchCode, simpleMatch[0]);
					matchI = target._singleMatchIndex;
					strict = target._singleMatchStrict;
				}
				let resultScore = matchI === 0 ? 0 : -matchI * matchI * 0.2;
				if (!strict) resultScore *= 1e3;
				else if (target._beginningsLen > 24) resultScore *= (target._beginningsLen - 24) * 10;
				target._score = resultScore - (targetLen - 1);
				target._indexes[0] = matchI;
				target._indexes.len = 1;
				return target;
			}
			searchI = 0;
			let strict = false;
			let strictLen = 0;
			let next = target._nextBeginningIndexes;
			if (beginnings === null && next === null) next = target._nextBeginningIndexes = makeNextBeginnings(target);
			let beginningLen = beginnings === null ? (changed ? 0 : target._beginningsLen) : end - start;
			if (!beginningLen) {
				beginningLen = 1;
				for (let i = next[0]; i < targetLen; i = next[i]) beginningLen++;
				if (!changed) target._beginningsLen = beginningLen;
			}
			let substringI = searchLen <= 1 ? -1 : target._targetLower.indexOf(search._lower, simpleMatch[0]);
			let isSubstring = substringI !== -1;
			let substringStart =
				isSubstring &&
				(substringI === 0 ||
					(beginnings ? isBeginning(beginnings, start, end, substringI) : next[substringI - 1] === substringI));
			if (substringStart && substringI === simpleMatch[0]) strict = true;
			else {
				targetI =
					simpleMatch[0] === 0
						? 0
						: beginnings
							? nextBeginning(beginnings, start, end, simpleMatch[0] - 1, targetLen)
							: next[simpleMatch[0] - 1];
				let backtracks = 0;
				if (targetI !== targetLen)
					for (;;)
						if (targetI >= targetLen) {
							if (searchI <= 0 || ++backtracks > 200) break;
							searchI--;
							let previous = strictMatch[--strictLen];
							targetI = beginnings ? nextBeginning(beginnings, start, end, previous, targetLen) : next[previous];
						} else if (searchCodes[searchI] === targetCodes[targetI]) {
							strictMatch[strictLen++] = targetI;
							if (++searchI === searchLen) {
								strict = true;
								break;
							}
							targetI++;
						} else targetI = beginnings ? nextBeginning(beginnings, start, end, targetI, targetLen) : next[targetI];
			}
			if (isSubstring && !substringStart)
				if (beginnings)
					for (let b = start; b < end; b++) {
						let i = beginnings[b];
						if (i <= substringI) continue;
						let s = 0;
						for (; s < searchLen && searchCodes[s] === targetCodes[i + s]; s++);
						if (s === searchLen) {
							substringI = i;
							substringStart = true;
							break;
						}
					}
				else
					for (let i = 0; i < next.length; i = next[i]) {
						if (i <= substringI) continue;
						let s = 0;
						for (; s < searchLen && searchCodes[s] === targetCodes[i + s]; s++);
						if (s === searchLen) {
							substringI = i;
							substringStart = true;
							break;
						}
					}
			let matches;
			if (!strict) {
				if (isSubstring) for (let i = 0; i < searchLen; i++) simpleMatch[i] = substringI + i;
				matches = simpleMatch;
			} else if (substringStart) {
				for (let i = 0; i < searchLen; i++) simpleMatch[i] = substringI + i;
				matches = simpleMatch;
			} else matches = strictMatch;
			let matchEnd = matches[searchLen - 1] + 1;
			let substringEnd =
				isSubstring &&
				matchEnd - matches[0] === searchLen &&
				(matchEnd === targetLen ||
					(beginnings ? isBeginning(beginnings, start, end, matchEnd) : next[matchEnd - 1] === matchEnd));
			target._score = calculateScore(
				matches,
				searchLen,
				targetLen,
				strict,
				beginningLen,
				isSubstring,
				substringStart,
				substringEnd
			);
			for (let i = 0; i < searchLen; i++) target._indexes[i] = matches[i];
			target._indexes.len = searchLen;
			return target;
		}
		function mergePartScores(length) {
			for (let i = 0; i < length; i++) {
				let partial = partials[i];
				let best = spaceScores[i];
				if (partial > -1e3 && best > -INF) best = Math.max(best, (best + partial) / 4);
				spaceScores[i] = Math.max(best, partial);
			}
		}
		function appendIndexes(indexes, additions) {
			let length = indexes.len;
			outer: for (let i = 0; i < additions.length; i++) {
				let index = additions[i];
				for (let j = 0; j < length; j++) if (indexes[j] === index) continue outer;
				indexes[length++] = index;
			}
			indexes.len = length;
		}
		function mergeScores(results, length) {
			let total = -INF;
			for (let i = 0; i < length; i++) {
				let score = results[i]._score;
				if (score > -1e3 && total > -INF) total = Math.max(total, (total + score) / 4);
				if (score > total) total = score;
			}
			return total;
		}
		function calculateScore(
			matches,
			searchLen,
			targetLen,
			strict,
			beginningLen,
			substring,
			substringStart,
			substringEnd
		) {
			let score = 0;
			let groups = 0;
			for (let i = 1; i < searchLen; i++)
				if (matches[i] - matches[i - 1] !== 1) {
					score -= matches[i];
					groups++;
				}
			let unmatchedDistance = matches[searchLen - 1] - matches[0] - (searchLen - 1);
			score -= (12 + unmatchedDistance) * groups;
			if (matches[0] !== 0) score -= matches[0] * matches[0] * 0.2;
			if (!strict) score *= 1e3;
			else if (beginningLen > 24) score *= (beginningLen - 24) * 10;
			let lengthPenalty = (targetLen - searchLen) / 2;
			score -= lengthPenalty;
			let substringBonus = 1 + searchLen * searchLen;
			if (substring) score /= substringBonus;
			if (substringStart) score /= substringBonus;
			score -= lengthPenalty;
			return substringEnd ? score + Math.min(4, -score / 2) : score;
		}
		function algorithmSpaces(search, target, partial) {
			let seenLen = 0;
			let generation = ++seenGeneration;
			let score = 0;
			let result = null;
			let previousFirst = 0;
			let searches = search.parts;
			let changesLen = 0;
			let matched = false;
			for (let i = 0; i < searches.length; i++) {
				partials[i] = -INF;
				if (partial) (partIndexes[i] ||= []).length = 0;
				result = algorithm(searches[i], target, false, false, changesLen !== 0, false);
				if (result === null) {
					if (partial) continue;
					resetBeginnings(target, changesLen);
					return null;
				}
				matched = true;
				if (i < searches.length - 1) {
					let indexes = result._indexes;
					let consecutive = true;
					for (let j = 0; j < indexes.len - 1; j++)
						if (indexes[j + 1] - indexes[j] !== 1) {
							consecutive = false;
							break;
						}
					if (consecutive) {
						let beginning = indexes[indexes.len - 1] + 1;
						let previous = target._nextBeginningIndexes[beginning - 1];
						for (let j = beginning - 1; j >= 0 && target._nextBeginningIndexes[j] === previous; j--) {
							target._nextBeginningIndexes[j] = beginning;
							changes[changesLen * 2] = j;
							changes[changesLen * 2 + 1] = previous;
							changesLen++;
						}
					}
				}
				if (partial) {
					let indexes = partIndexes[i];
					indexes.length = result._indexes.len;
					for (let j = 0; j < indexes.length; j++) indexes[j] = result._indexes[j];
				}
				let partScore = result._score / searches.length;
				score += partScore;
				partials[i] = partScore;
				if (result._indexes[0] < previousFirst) score -= (previousFirst - result._indexes[0]) * 2;
				previousFirst = result._indexes[0];
				if (!partial)
					for (let j = 0; j < result._indexes.len; j++) {
						let index = result._indexes[j];
						if (seenAt[index] === generation) continue;
						seenAt[index] = generation;
						seen[seenLen++] = index;
					}
			}
			if (partial && !matched) return null;
			resetBeginnings(target, changesLen);
			if (target._bitflags & SPACE_BIT) {
				let spacedResult = algorithm(search, target, true);
				if (spacedResult !== null && spacedResult._score > score) {
					if (partial) {
						let searchFrom = 0;
						for (let i = 0; i < searches.length; i++) {
							partials[i] = spacedResult._score / searches.length;
							let part = searches[i]._lower;
							let searchI = search._lower.indexOf(part, searchFrom);
							let indexes = partIndexes[i];
							indexes.length = part.length;
							for (let j = 0; j < part.length; j++) indexes[j] = spacedResult._indexes[searchI + j];
							searchFrom = searchI + part.length;
						}
						if (spacedResult._score < GOOD_PART_SCORE) spacedResult._indexes.len = 0;
					}
					return spacedResult;
				}
			}
			if (partial) {
				result = target;
				let targetLower = target._targetLower;
				for (let i = 1; i < searches.length; i++) {
					let previous = partIndexes[i - 1];
					if (!previous.length || !partIndexes[i].length) continue;
					let previousEnd = previous[previous.length - 1] + 1;
					let at = previousEnd;
					let code;
					while ((code = targetLower.charCodeAt(at)) === 32 || (code >= 9 && code <= 13)) at++;
					let part = searches[i]._lower;
					if (!targetLower.startsWith(part, at)) continue;
					for (let j = previousEnd; j < at; j++) previous.push(j);
					let indexes = partIndexes[i];
					indexes.length = part.length;
					for (let j = 0; j < part.length; j++) indexes[j] = at + j;
				}
				result._indexes.len = 0;
				for (let i = 0; i < searches.length; i++)
					if (partials[i] * searches.length >= GOOD_PART_SCORE) appendIndexes(result._indexes, partIndexes[i]);
			} else {
				for (let i = 0; i < seenLen; i++) result._indexes[i] = seen[i];
				result._indexes.len = seenLen;
			}
			result._score = score;
			return result;
		}
		function resetBeginnings(target, changesLen) {
			for (let i = changesLen - 1; i >= 0; i--) target._nextBeginningIndexes[changes[i * 2]] = changes[i * 2 + 1];
		}
		var SnapshotTargets = class {
			constructor(targets, options) {
				this._mode = options?.keys ? 2 : options?.key ? 1 : 0;
				this._keys = this._mode === 2 ? options.keys.slice() : [options?.key];
				this._input = targets.slice();
				this._index = 0;
				this._done = false;
				this._error = null;
				this._scheduled = null;
				if (targets.length === 0) this._finish();
				else this._schedule();
			}
			_schedule() {
				if (this._scheduled !== null) return;
				this._scheduled = scheduleTask((deadline) => {
					this._scheduled = null;
					this._run(deadline);
				});
			}
			_cancel() {
				if (this._scheduled !== null) this._scheduled();
				this._scheduled = null;
			}
			_initialize() {
				if (this._targets) return;
				let keysLength = this._mode === 2 ? this._keys.length : 1;
				let valueCount = this._input.length * keysLength;
				let rowCount = this._input.length;
				this._targets = new Array(valueCount);
				this._first = new Uint16Array(valueCount * 26);
				this._offsets = new Uint32Array(valueCount + 1);
				this._buildingBeginnings = [];
				this._rowCount = rowCount;
				this._rowWords = (rowCount + 31) >> 5;
				this._rowBits = new Uint32Array(this._rowWords * 32);
				this._rows = new Uint32Array(rowCount);
				this._lastRowsLen = 0;
				this._matchedRowsLen = 0;
				this._lastQuery = null;
				this._candidateRows = null;
				this._candidateLength = rowCount;
				this._history = [];
				if (this._mode) {
					this._objects = this._input;
					this._getters = this._keys.map(makeGetter);
				}
				if (this._mode === 2) {
					this._keysLength = keysLength;
					this._bitflags = new Int32Array(rowCount);
				}
			}
			_run(deadline) {
				if (this._done || this._error) return;
				let end = Date.now() + 4;
				let hasTime = () => (deadline && !deadline.didTimeout ? deadline.timeRemaining() > 1 : Date.now() < end);
				try {
					this._initialize();
					do this._prepareOne();
					while (this._index < this._input.length && hasTime());
					if (this._index === this._input.length) this._complete();
					else this._schedule();
				} catch (error) {
					this._error = error;
					this._done = true;
				}
			}
			_indexRow(row, bitflags) {
				let flags = bitflags >>> 0;
				let word = row >> 5;
				let mask = 1 << (row & 31);
				let words = this._rowWords;
				let bits = this._rowBits;
				while (flags) {
					let lowest = flags & -flags;
					let bit = 31 - Math.clz32(lowest);
					bits[bit * words + word] |= mask;
					flags = (flags & (flags - 1)) >>> 0;
				}
			}
			_prepareOne() {
				let i = this._index++;
				let mode = this._mode;
				let obj = this._input[i];
				let keysLength = mode === 2 ? this._keysLength : 1;
				let bitflags = 0;
				for (let k = 0; k < keysLength; k++) {
					let value = mode === 0 ? obj : this._getters[k] === null ? obj[this._keys[k]] : this._getters[k](obj);
					let row = mode === 2 ? i * keysLength + k : i;
					let prepared = (this._targets[row] = value ? prepTarget(value) : noTarget);
					if (prepared !== noTarget) indexBeginnings(prepared, this._first, row, this._buildingBeginnings);
					this._offsets[row + 1] = this._buildingBeginnings.length;
					bitflags |= prepared._bitflags;
				}
				if (mode === 2) this._bitflags[i] = bitflags;
				this._indexRow(i, bitflags);
			}
			_complete() {
				this._beginnings = Uint16Array.from(this._buildingBeginnings);
				this._buildingBeginnings = this._input = this._getters = this._keys = null;
				this._done = true;
			}
			_bitOffsets(bitflags) {
				let offsetsLen = 0;
				let words = this._rowWords;
				for (let bit = 0; bit < 32; bit++) if (bitflags & (1 << bit)) candidateBitOffsets[offsetsLen++] = bit * words;
				return offsetsLen;
			}
			_matchRows(bitflags, fill = false, stop = INF) {
				let offsetsLen = this._bitOffsets(bitflags);
				if (!offsetsLen) {
					if (fill) {
						this._candidateRows = null;
						this._candidateLength = this._rowCount;
					}
					return this._rowCount;
				}
				let bits = this._rowBits;
				let words = this._rowWords;
				let rowsLen = 0;
				for (let word = 0; word < words; word++) {
					let matches = bits[candidateBitOffsets[0] + word];
					for (let i = 1; i < offsetsLen && matches; i++) matches &= bits[candidateBitOffsets[i] + word];
					if (!fill) {
						rowsLen += bitCount(matches);
						if (rowsLen >= stop) return rowsLen;
						continue;
					}
					while (matches) {
						let lowest = matches & -matches;
						this._rows[rowsLen++] = (word << 5) + 31 - Math.clz32(lowest);
						matches = (matches & (matches - 1)) >>> 0;
					}
				}
				if (fill) {
					this._candidateRows = this._rows;
					this._candidateLength = rowsLen;
				}
				return rowsLen;
			}
			_beginSearch(query) {
				this._matchedRowsLen = 0;
				let previousQuery = this._lastQuery;
				let previousLength = this._lastRowsLen;
				this._lastQuery = null;
				let bitflags = query.bitflags >>> 0;
				if (previousQuery !== null && query._lower.startsWith(previousQuery)) {
					if (previousLength <= this._matchRows(bitflags, false, previousLength)) {
						this._candidateRows = this._rows;
						this._candidateLength = previousLength;
						return;
					}
				}
				this._matchRows(bitflags, true);
			}
			_endSearch(query) {
				this._lastRowsLen = this._matchedRowsLen;
				this._matchedRowsLen = 0;
				this._lastQuery = query._lower || null;
				this._candidateRows = null;
				this._candidateLength = 0;
			}
			_backtrack(query, options) {
				let history = this._history;
				if (history.length < 2 || options?.scoreFn || options?.threshold !== void 0) return null;
				let limit = getLimit(options);
				if (limit === INF) return null;
				let current = history[history.length - 1];
				let value = query._lower;
				if (current.query === value && current.limit === limit && current.results) return copyResults(current.results);
				if (value.length >= current.query.length || !current.query.startsWith(value)) return null;
				let i = history.length - 2;
				while (i >= 0 && history[i].query.length > value.length) i--;
				let entry = history[i];
				if (!entry || entry.query !== value || entry.limit !== limit) return null;
				history.length = i + 1;
				if (!entry.results) return null;
				this._resetSearch();
				return copyResults(entry.results);
			}
			_remember(query, results, options) {
				let history = this._history;
				let limit = getLimit(options);
				if (options?.scoreFn || options?.threshold !== void 0 || limit === INF || results.length > 256) {
					history.length = 0;
					return;
				}
				let value = query._lower;
				let last = history[history.length - 1];
				if (last && !value.startsWith(last.query)) history.length = 0;
				else if (last?.query === value && last.limit === limit) history.pop();
				history.push({ query: value, limit, results: value.length <= 32 ? copyResults(results) : null });
			}
			_resetSearch() {
				this._lastQuery = null;
				this._lastRowsLen = this._matchedRowsLen = this._candidateLength = 0;
				this._candidateRows = null;
			}
			_finish() {
				if (this._error) throw this._error;
				if (this._done) return;
				this._cancel();
				try {
					this._initialize();
					while (this._index < this._input.length) this._prepareOne();
					this._complete();
				} catch (error) {
					this._error = error;
					this._done = true;
					throw error;
				}
			}
		};
		function copyResult(result) {
			if (result === noTarget) return noTarget;
			if (result instanceof KeysResult) {
				let copy = result.map(copyResult);
				copy.obj = result.obj;
				copy._score = result._score;
				if (result._partWinners) copy._partWinners = true;
				return copy;
			}
			let copy = materialize(result, result.obj);
			if (result._bestKeyScore !== void 0) copy._bestKeyScore = result._bestKeyScore;
			let indexes = result._indexes;
			copy._indexes = indexes.slice(0, indexes.len ?? indexes.length);
			copy._indexes.len = copy._indexes.length;
			return copy;
		}
		function copyResults(results) {
			let copies = results.map(copyResult);
			copies.total = results.total;
			return copies;
		}
		function prepTarget(target) {
			if (isPrepared(target)) target = target.target;
			else if (typeof target === "number") target = "" + target;
			else if (typeof target !== "string") target = "";
			let info = lowerInfo(target);
			return newResult(target, -INF, null, info._lower, info.lowerCodes, info.bitflags);
		}
		function prepQuery(search) {
			if (typeof search === "number") search = "" + search;
			else if (typeof search !== "string") search = "";
			search = remapChars(search).trim();
			let info = lowerInfoRemapped(search);
			info.bitflags &= ~SPACE_BIT;
			info.parts = info.hasSpace ? [...new Set(info._lower.split(/\s+/))].map(prepQuery) : [];
			return info;
		}
		function getPrepared(target) {
			if (target.length > 999) return prepTarget(target);
			let prepared = targetCache.get(target);
			if (prepared === void 0) targetCache.set(target, (prepared = prepTarget(target)));
			return prepared;
		}
		function getQuery(search) {
			if (search.length > 999) return prepQuery(search);
			let prepared = searchCache.get(search);
			if (prepared === void 0) {
				if (searchCache.size >= 512) searchCache.clear();
				searchCache.set(search, (prepared = prepQuery(search)));
			}
			return prepared;
		}
		function scanBeginnings(prepared, visit) {
			let target = remapChars(prepared.target);
			let wasUpper = false;
			let wasAlnum = false;
			let count = 0;
			for (let i = 0; i < target.length; i++) {
				let code = target.charCodeAt(i);
				let upper = code >= 65 && code <= 90;
				let alnum = upper || (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
				let beginning = (upper && !wasUpper) || !wasAlnum || !alnum;
				wasUpper = upper;
				wasAlnum = alnum;
				if (beginning) {
					count++;
					visit(i);
				}
			}
			prepared._beginningsLen = count;
		}
		function indexBeginnings(prepared, firstTable, row, packed) {
			if (prepared.target.length >= 65535) return;
			let target = remapChars(prepared.target);
			let lowerCodes = prepared._targetLowerCodes;
			let offset = row * 26;
			let wasUpper = false;
			let wasAlnum = false;
			let count = 0;
			for (let i = 0; i < target.length; i++) {
				let code = target.charCodeAt(i);
				let upper = code >= 65 && code <= 90;
				let alnum = upper || (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
				let beginning = (upper && !wasUpper) || !wasAlnum || !alnum;
				wasUpper = upper;
				wasAlnum = alnum;
				if (!beginning) continue;
				count++;
				packed.push(i);
				code = lowerCodes[i];
				if (code >= 97 && code <= 122) {
					let slot = offset + code - 97;
					if (firstTable[slot] === 0) firstTable[slot] = i + 1;
				}
			}
			prepared._beginningsLen = count;
		}
		function prepareSingleMatch(prepared, searchCode, fallbackIndex) {
			let matchI = fallbackIndex;
			let strict = false;
			scanBeginnings(prepared, (i) => {
				if (!strict && searchCode === prepared._targetLowerCodes[i]) {
					matchI = i;
					strict = true;
				}
			});
			prepared._singleMatchCode = searchCode;
			prepared._singleMatchIndex = matchI;
			prepared._singleMatchStrict = strict;
		}
		function makeBeginnings(prepared) {
			let beginnings = [];
			scanBeginnings(prepared, (i) => beginnings.push(i));
			return beginnings;
		}
		function makeNextBeginnings(prepared) {
			let next = [];
			let fill = 0;
			scanBeginnings(prepared, (i) => {
				for (; fill < i; fill++) next[fill] = i;
			});
			for (; fill < prepared.target.length; fill++) next[fill] = prepared.target.length;
			return next;
		}
		function remapCharacter(char) {
			let remapped = remappings[char];
			if (remapped !== void 0) return remapped;
			if (char.charCodeAt(0) < 128) return char;
			remapped = char.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
			return remapped.length === 1 ? remapped : char;
		}
		function remapChars(value) {
			if (customAsciiRemappings) return value.replace(/[\s\S]/g, remapCharacter);
			return /[^\x00-\x7F]|[\\"`]/.test(value) ? value.replace(/[^\x00-\x7F]|[\\"`]/g, remapCharacter) : value;
		}
		function lowerInfo(value) {
			return lowerInfoRemapped(remapChars(value));
		}
		function lowerInfoRemapped(value) {
			let lower = value.toLowerCase();
			let lowerCodes = [];
			let bitflags = 0;
			let hasSpace = false;
			for (let i = 0; i < lower.length; i++) {
				let code = (lowerCodes[i] = lower.charCodeAt(i));
				if (code === 32) {
					hasSpace = true;
					bitflags |= SPACE_BIT;
					continue;
				}
				let bit = code >= 97 && code <= 122 ? code - 97 : code >= 48 && code <= 57 ? 26 : code <= 127 ? 30 : 31;
				bitflags |= 1 << bit;
			}
			return { lowerCodes, bitflags, hasSpace, _lower: lower };
		}
		var Result = class {
			get ["indexes"]() {
				return this._indexes.slice(0, this._indexes.len).sort((a, b) => a - b);
			}
			set ["indexes"](value) {
				this._indexes = value;
			}
			["highlight"](open, close, threshold) {
				return highlight(this, open, close, threshold);
			}
			get ["score"]() {
				return normalizeScore(this._score);
			}
		};
		var KeysResult = class extends Array {
			get ["score"]() {
				return normalizeScore(this._score);
			}
		};
		function newResult(target, score = -INF, obj = null, lower = "", lowerCodes = null, bitflags = 0) {
			let result = new Result();
			result.target = target;
			result.obj = obj;
			result._score = score;
			result._indexes = [];
			result._targetLower = lower;
			result._targetLowerCodes = lowerCodes;
			result._nextBeginningIndexes = null;
			result._beginnings = null;
			result._beginningsLen = 0;
			result._singleMatchCode = result._singleMatchIndex = -1;
			result._singleMatchStrict = false;
			result._bitflags = bitflags;
			return result;
		}
		function materialize(prepared, obj = null) {
			let result = new Result();
			result.target = prepared.target;
			result.obj = obj;
			result._score = prepared._score;
			result._indexes = prepared._indexes;
			return result;
		}
		function markBestKeyScore(result) {
			let best = -INF;
			for (let i = 0; i < result.length; i++)
				if (result[i] !== noTarget && result[i]._score > best) best = result[i]._score;
			for (let i = 0; i < result.length; i++) if (result[i] !== noTarget) result[i]._bestKeyScore = best;
			return result;
		}
		function captureKeysResult(matches, keysLength, obj, score, partWinners = false) {
			let result = new KeysResult(keysLength);
			for (let k = 0; k < keysLength; k++) result[k] = matches[k];
			result.obj = obj;
			result._score = score;
			if (partWinners) result._partWinners = true;
			return result;
		}
		let normalizeScore = (value) =>
			value === -INF ? 0 : value > 1 ? value : Math.E ** (((-value + 1) ** 0.04307 - 1) * -2);
		let denormalizeScore = (value) =>
			value === 0 ? -INF : value > 1 ? value : 1 - Math.pow(Math.log(value) / -2 + 1, 1 / 0.04307);
		let GOOD_PART_SCORE = denormalizeScore(0.5);
		let isPrepared = (value) => typeof value === "object" && typeof value?._bitflags === "number";
		function makeGetter(key) {
			if (typeof key === "function") return key;
			let path = Array.isArray(key) ? key : typeof key === "string" && key.includes(".") ? key.split(".") : null;
			if (path === null) return null;
			return (obj) => {
				if (path !== key) {
					let direct = obj[key];
					if (direct !== void 0) return direct;
				}
				for (let i = 0; obj && i < path.length; i++) obj = obj[path[i]];
				return obj;
			};
		}
		function scoreCeiling(searchLen, targetLen) {
			let lengthPenalty = (targetLen - searchLen) / 2;
			let bonus = 1 + searchLen * searchLen;
			let score = -lengthPenalty - lengthPenalty / (bonus * bonus);
			return score + Math.min(4, -score / 2);
		}
		function bitCount(value) {
			value -= (value >>> 1) & 1431655765;
			value = (value & 858993459) + ((value >>> 2) & 858993459);
			return (((value + (value >>> 4)) & 252645135) * 16843009) >>> 24;
		}
		function lowerBound(values, start, end, value) {
			while (start < end) {
				let middle = (start + end) >> 1;
				if (values[middle] < value) start = middle + 1;
				else end = middle;
			}
			return start;
		}
		function nextBeginning(indexes, start, end, index, targetLen) {
			let next = lowerBound(indexes, start, end, index + 1);
			return next < end ? indexes[next] : targetLen;
		}
		function isBeginning(indexes, start, end, index) {
			let found = lowerBound(indexes, start, end, index);
			return found < end && indexes[found] === index;
		}
		function getLimit(options) {
			return (options?.limit ?? 10) || INF;
		}
		function scheduleTask(run) {
			let id;
			if (typeof requestIdleCallback === "function") {
				id = requestIdleCallback(run, { timeout: 100 });
				return () => typeof cancelIdleCallback === "function" && cancelIdleCallback(id);
			}
			if (typeof setImmediate === "function") {
				id = setImmediate(run);
				return () => typeof clearImmediate === "function" && clearImmediate(id);
			}
			id = setTimeout(run);
			return () => clearTimeout(id);
		}
		function createHeap() {
			let items = [];
			let length = 0;
			function down() {
				let index = 0;
				let item = items[0];
				for (let child = 1; child < length; child = 1 + index * 2) {
					let right = child + 1;
					index = right < length && items[right]._score < items[child]._score ? right : child;
					items[(index - 1) >> 1] = items[index];
				}
				for (
					let parent = (index - 1) >> 1;
					index > 0 && item._score < items[parent]._score;
					parent = ((index = parent) - 1) >> 1
				)
					items[index] = items[parent];
				items[index] = item;
			}
			return {
				add(item) {
					let index = length++;
					for (
						let parent = (index - 1) >> 1;
						index > 0 && item._score < items[parent]._score;
						parent = ((index = parent) - 1) >> 1
					)
						items[index] = items[parent];
					items[index] = item;
				},
				poll() {
					if (!length) return;
					let root = items[0];
					let last = items[--length];
					items[length] = void 0;
					if (length) {
						items[0] = last;
						down();
					}
					return root;
				},
				peek() {
					return length ? items[0] : void 0;
				},
				replaceTop(item) {
					items[0] = item;
					down();
				},
				clear() {
					items.length = length = 0;
				}
			};
		}
		let INF = Infinity;
		let SPACE_BIT = 1 << 27;
		let noResults = [];
		noResults.total = 0;
		let targetCache = new Map(),
			searchCache = new Map();
		let simpleMatch = [],
			strictMatch = [];
		let seen = [],
			seenAt = [];
		let changes = [],
			partials = [],
			spaceScores = [];
		let partIndexes = [],
			winnerIndexes = [],
			winnerScores = [],
			winnerKeys = [];
		let keyTargets = [],
			keyResults = [];
		let candidateBitOffsets = [];
		let seenGeneration = 0;
		let remappings = {};
		let remapFrom = '\\"`‘’‚‛“”„‟«»‹›‐–—−⁄∕…øØłŁđĐðÐıħĦŧŦ';
		let remapTo = "/''''''''''''''----//.oOlLdDdDihHtT";
		for (let i = 0; i < 35; i++) remappings[remapFrom[i]] = remapTo[i];
		let customAsciiRemappings = false;
		let heap = createHeap();
		let noTarget = prepTarget("");
		let prunedMatch = {};
		var fuzzysort_default = { single, go, highlight, score, remap, prepare, snapshot, cleanup };
		const FUZZY_PREFIX = 4;
		const FUZZY_SUBSTRING = 3;
		const FUZZY_SUBSEQUENCE = 2;
		const SUBSTRING = 1;
		const WORD_CHAR = /[\p{L}\p{N}]/u;
		const UPPER = /\p{Lu}/u;
		const LOWER = /\p{Ll}/u;
		const UNSPACED = /[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}\p{scx=Hang}]/u;
		function codePointAt(text, index) {
			return String.fromCodePoint(text.codePointAt(index));
		}
		function codePointBefore(text, index) {
			const low = text.charCodeAt(index - 1);
			return codePointAt(text, low >= 56320 && low <= 57343 && index >= 2 ? index - 2 : index - 1);
		}
		function wordStart(text, index) {
			if (index === 0) return true;
			const char = codePointAt(text, index);
			const previous = codePointBefore(text, index);
			return !WORD_CHAR.test(previous) || UNSPACED.test(char) || (UPPER.test(char) && LOWER.test(previous));
		}
		const PRINTABLE_ASCII = /^[\x20-\x7e]*$/;
		const DIACRITIC = /[\u0300-\u036f]/gu;
		const STROKED = {
			ø: "o",
			Ø: "O",
			ł: "l",
			Ł: "L",
			đ: "d",
			Đ: "D",
			ð: "d",
			Ð: "D",
			ı: "i",
			ħ: "h",
			Ħ: "H",
			ŧ: "t",
			Ŧ: "T"
		};
		const STROKED_CHAR = /[øØłŁđĐðÐıħĦŧŦ]/gu;
		function strip(value) {
			if (PRINTABLE_ASCII.test(value)) return value;
			return value
				.normalize("NFKD")
				.replace(DIACRITIC, "")
				.normalize("NFKC")
				.replace(STROKED_CHAR, (char) => STROKED[char]);
		}
		function fold(value) {
			return strip(value).toLowerCase();
		}
		function prepareKeys(keys, reuse, into) {
			return {
				fuzzy: (keys.fuzzy ?? []).flatMap((value) => {
					if (value === void 0 || value === "") return [];
					let name = into.fuzzy.get(value) ?? reuse?.fuzzy.get(value);
					if (name === void 0) {
						const stripped = strip(value);
						name = { stripped, folded: stripped.toLowerCase(), starts: void 0, tails: new Map() };
					}
					into.fuzzy.set(value, name);
					return [name];
				}),
				substring: (keys.substring ?? []).flatMap((value) => {
					if (value === void 0 || value === "") return [];
					const folded = into.substring.get(value) ?? reuse?.substring.get(value) ?? fold(value);
					into.substring.set(value, folded);
					return [folded];
				})
			};
		}
		function build(items, keys, reuse) {
			const preparations = { fuzzy: new Map(), substring: new Map() };
			return { keys: items.map((item) => prepareKeys(keys(item), reuse, preparations)), preparations };
		}
		function inOrder(term, text) {
			let at = 0;
			for (const char of term) {
				at = text.indexOf(char, at);
				if (at === -1) return false;
				at += char.length;
			}
			return true;
		}
		function fuzzyNameScore(term, name) {
			if (!inOrder(term.folded, name.folded)) return void 0;
			if (name.starts === void 0) {
				const starts = [];
				let index = 0;
				for (const char of name.stripped) {
					if (wordStart(name.stripped, index)) starts.push(index);
					index += char.length;
				}
				name.starts = starts;
			}
			const first = codePointAt(term.stripped, 0).toLowerCase();
			let best;
			for (const start of name.starts) {
				if (codePointAt(name.stripped, start).toLowerCase() !== first) continue;
				let tail = name.tails.get(start);
				if (tail === void 0) {
					tail = fuzzysort_default.prepare(name.stripped.slice(start));
					name.tails.set(start, tail);
				}
				const result = fuzzysort_default.single(term.stripped, tail);
				if (result !== null && wordStart(name.stripped, start + result.indexes[0]))
					best = best === void 0 ? result.score : Math.max(best, result.score);
			}
			return best;
		}
		function termScore(term, keys) {
			let best;
			const take = (score) => {
				best = best === void 0 ? score : Math.max(best, score);
			};
			for (const name of keys.fuzzy) {
				const at = name.folded.indexOf(term.folded);
				if (at === 0) take(FUZZY_PREFIX);
				else if (at > 0) take(FUZZY_SUBSTRING);
				else {
					const score = fuzzyNameScore(term, name);
					if (score !== void 0) take(FUZZY_SUBSEQUENCE + Math.min(score, 0.99));
				}
			}
			for (const text of keys.substring) if (text.includes(term.folded)) take(SUBSTRING);
			return best;
		}
		var TextSearchIndex = class TextSearchIndex {
			#items;
			#keys;
			#preparations;
			constructor(items, keys) {
				const built = build(items, keys, void 0);
				this.#items = items;
				this.#keys = built.keys;
				this.#preparations = built.preparations;
			}
			update(items, keys) {
				const next = new TextSearchIndex([], keys);
				const built = build(items, keys, this.#preparations);
				next.#items = items;
				next.#keys = built.keys;
				next.#preparations = built.preparations;
				return next;
			}
			search(query) {
				const terms = query
					.trim()
					.split(/\s+/u)
					.map((term) => ({ stripped: strip(term), folded: fold(term) }))
					.filter((term) => term.folded !== "");
				if (terms.length === 0) return this.#items;
				const ranked = [];
				this.#keys.forEach((itemKeys, index) => {
					let score = 0;
					for (const term of terms) {
						const hit = termScore(term, itemKeys);
						if (hit === void 0) return;
						score += hit;
					}
					ranked.push({ index, score });
				});
				ranked.sort((left, right) => right.score - left.score || left.index - right.index);
				return ranked.map((entry) => this.#items[entry.index]);
			}
		};
		function textOf$1(model, key) {
			const value = model[key];
			return typeof value === "string" ? value : "";
		}
		function numberOf(model, key) {
			const value = model[key];
			return typeof value === "number" ? value : void 0;
		}
		const CAPACITY_HINT = { contextWindow: "1M", maxTokens: "128K" };
		function capacitySpelling(value) {
			return value === void 0 ? "" : formatCapacity(value);
		}
		function adopt(candidate) {
			return {
				id: candidate.id,
				...(candidate.name === void 0 ? {} : { name: candidate.name }),
				...(candidate.contextWindow === void 0 ? {} : { contextWindow: candidate.contextWindow }),
				...(candidate.maxTokens === void 0 ? {} : { maxTokens: candidate.maxTokens }),
				...(candidate.inputModalities === void 0 ? {} : { input: [...candidate.inputModalities] })
			};
		}
		function ModelListEditor(props) {
			const { models, onChange, probe, operations, t, disabled, onBusyChange } = props;
			const { catalogProvider } = props;
			const [busy, setBusy] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				onBusyChange(busy);
			}, [busy, onBusyChange]);
			const [failure, setFailure] = (0, react.useState)(void 0);
			const [inheritedCatalog, setInheritedCatalog] = (0, react.useState)(void 0);
			(0, react.useEffect)(() => {
				if (catalogProvider === void 0) return;
				let current = true;
				operations.discoverModels(probe.settingsNs, { provider: catalogProvider }).then((answer) => {
					if (!current) return;
					setInheritedCatalog({ provider: catalogProvider, models: answer.kind === "found" ? answer.models : [] });
					setFailure(answer.kind === "refused" ? answer.message : void 0);
				});
				return () => {
					current = false;
				};
			}, [catalogProvider, operations, probe.settingsNs]);
			const catalog = inheritedCatalog?.provider === catalogProvider ? inheritedCatalog?.models : void 0;
			const inputDefaults = (0, react.useMemo)(
				() => new Map(catalog?.map((model) => [model.id, model.inputModalities])),
				[catalog]
			);
			const [candidates, setCandidates] = (0, react.useState)(void 0);
			const [flipped, setFlipped] = (0, react.useState)(new Set());
			const [candidateQuery, setCandidateQuery] = (0, react.useState)("");
			const rowState = useModelRows(models, onChange, disabled);
			const editCapacity = (index, field, text) => {
				rowState.edit(index, field, text);
				patch(index, { [field]: parseCapacity(text) });
			};
			const capacityText = (model, index, field) =>
				rowState.rows[index]?.editing.get(field) ?? capacitySpelling(numberOf(model, field));
			const patch = (index, next) => {
				onChange(
					models.map((model, at) => {
						if (at !== index) return model;
						const cleared = new Set(
							Object.entries(next)
								.filter(([, value]) => value === void 0 || value === "")
								.map(([key]) => key)
						);
						return carryClaudeDraft(
							model,
							Object.fromEntries(
								Object.entries({
									...model,
									...next
								}).filter(([key]) => !cleared.has(key))
							)
						);
					})
				);
			};
			const fetchModels = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const answer = await operations.discoverModels(probe.settingsNs, {
						...(probe.provider === void 0 ? {} : { provider: probe.provider }),
						...(probe.baseURL === void 0 || probe.baseURL.length === 0 ? {} : { baseURL: probe.baseURL }),
						...(probe.api === void 0 ? {} : { api: props.thinkingPresets ? CLAUDE_DISCOVERY_API : probe.api }),
						...(probe.apiKey === void 0 ? {} : { apiKey: probe.apiKey })
					});
					if (answer.kind === "refused") {
						setFailure(answer.message);
						return;
					}
					const found = answer.models;
					if (catalogProvider !== void 0) setInheritedCatalog({ provider: catalogProvider, models: found });
					if (found.length === 0) {
						setFailure(t("fetchEmpty"));
						return;
					}
					setCandidateQuery("");
					setFlipped(new Set());
					setCandidates([...new Map(found.map((model) => [model.id, model])).values()]);
				} finally {
					setBusy(false);
				}
			};
			const closePicker = () => {
				setCandidates(void 0);
				setFlipped(new Set());
				setCandidateQuery("");
			};
			const configuredIds = new Set(models.map((model) => textOf$1(model, "id")).filter((id) => id.length > 0));
			const pickedByDefault = (id) => configuredIds.size === 0 || configuredIds.has(id);
			const isPicked = (id) => pickedByDefault(id) !== flipped.has(id);
			const activeCandidates = candidates ?? [];
			const candidateIndex = (0, react.useMemo)(
				() => new TextSearchIndex(candidates ?? [], (candidate) => ({ fuzzy: [candidate.id, candidate.name] })),
				[candidates]
			);
			const listed = new Set(activeCandidates.map((candidate) => candidate.id));
			const removedRows = new Set();
			models.forEach((model, at) => {
				const id = textOf$1(model, "id");
				if (listed.has(id) && !isPicked(id)) removedRows.add(at);
			});
			const keptRows = models.filter((_model, at) => !removedRows.has(at));
			const keptIds = new Set(keptRows.map((model) => textOf$1(model, "id")));
			const addedRows = activeCandidates
				.filter((candidate) => isPicked(candidate.id) && !keptIds.has(candidate.id))
				.map((candidate) => (props.thinkingPresets ? withFetchedClaudeMetadata(adopt(candidate)) : adopt(candidate)));
			const emptiesList = models.length > 0 && keptRows.length === 0 && addedRows.length === 0;
			const adoptPicked = () => {
				onChange([...keptRows, ...addedRows]);
				rowState.forget(removedRows);
				closePicker();
			};
			const toggle = (id) => {
				setFlipped((current) => {
					const next = new Set(current);
					if (!next.delete(id)) next.add(id);
					return next;
				});
			};
			const visibleCandidates = candidateIndex.search(candidateQuery);
			const allVisibleCandidatesPicked =
				visibleCandidates.length > 0 && visibleCandidates.every((candidate) => isPicked(candidate.id));
			const toggleVisibleCandidates = () => {
				const target = !allVisibleCandidatesPicked;
				setFlipped((current) => {
					const next = new Set(current);
					for (const candidate of visibleCandidates)
						if (pickedByDefault(candidate.id) === target) next.delete(candidate.id);
						else next.add(candidate.id);
					return next;
				});
			};
			const askable = probe.provider !== void 0 || (probe.baseURL !== void 0 && probe.baseURL.length > 0);
			return (0, react_jsx_runtime.jsxs)("section", {
				className: ModelsSection_module_css_default["modelCatalog"],
				"aria-label": t("models"),
				children: [
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["modelListHead"],
						children: [
							(0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_css_default["modelCatalogHeading"],
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										className: ModelsSection_module_css_default["modelCatalogTitle"],
										children: t("models")
									}),
									props.overridden === void 0
										? null
										: (0, react_jsx_runtime.jsx)("span", {
												className: ModelsSection_module_css_default["modelCatalogMeta"],
												children: props.overridden ? t("modelsCustomized") : t("modelsInherited")
											})
								]
							}),
							props.overridden === true && props.onReset !== void 0
								? (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelsSection_module_css_default["linkButton"],
										disabled,
										onClick: () => {
											rowState.reset();
											props.onReset?.();
										},
										children: t("resetModels")
									})
								: null,
							(0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: ModelsSection_module_css_default["linkButton"],
								disabled: disabled || busy || !askable || props.probeBlocked !== void 0,
								title:
									props.probeBlocked !== void 0 ? t(props.probeBlocked) : askable ? void 0 : t("fetchNeedsBaseUrl"),
								onClick: () => {
									fetchModels();
								},
								children: busy ? t("fetching") : t("fetchModels")
							})
						]
					}),
					models.length === 0
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["modelEmpty"],
								children: t("modelsEmpty")
							})
						: null,
					(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.AnimatedRows, {
						className: ModelsSection_module_css_default["modelList"],
						rowKeys: rowState.rows.map((row) => String(row.key)),
						ready: true,
						resetKey: "",
						children: rowState.rows.map(({ model, key, expanded, order }, index) =>
							(0, react_jsx_runtime.jsx)(
								ModelRow,
								{
									rowKey: key,
									order,
									model,
									position: index + 1,
									inputField: "input",
									thinkingPresets: props.thinkingPresets,
									inputFallback:
										props.thinkingPresets && CLAUDE_KNOWN_MODELS[model.id]
											? ["text", "image"]
											: (inputDefaults.get(textOf$1(model, "id")) ?? props.defaultInput),
									inputLoading: catalogProvider !== void 0 && catalog === void 0,
									reasoningLevels: props.reasoningLevels,
									adaptiveFallback: props.adaptiveFallback,
									reasoningLevelsOnly: props.reasoningLevelsOnly,
									expanded,
									disabled,
									t,
									contextWindow: {
										value: capacityText(model, index, "contextWindow"),
										placeholder: CAPACITY_HINT.contextWindow,
										onChange: (text) => {
											editCapacity(index, "contextWindow", text);
										}
									},
									maxTokens: {
										value: capacityText(model, index, "maxTokens"),
										placeholder: CAPACITY_HINT.maxTokens,
										onChange: (text) => {
											editCapacity(index, "maxTokens", text);
										}
									},
									onIdBlur: () => {
										if (!props.thinkingPresets) return;
										const next = finishClaudeDraft(model);
										if (next !== model) onChange(models.map((row, at) => (at === index ? next : row)));
									},
									onFieldChange: (field, value) => {
										patch(index, { [field]: value });
									},
									onChange: (next) => {
										onChange(models.map((row, at) => (at === index ? next : row)));
									},
									onToggle: () => {
										rowState.toggle(index);
									},
									onRemove: () => {
										onChange(models.filter((_model, at) => at !== index));
										rowState.forget(new Set([index]));
									}
								},
								key
							)
						)
					}),
					(0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: ModelsSection_module_css_default["addModelButton"],
						disabled,
						onClick: () => {
							onChange([...models, props.thinkingPresets ? newClaudeModel() : { id: "" }]);
						},
						children: [
							(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }),
							t("addModel")
						]
					}),
					failure !== void 0
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["error"],
								children: failure
							})
						: null,
					(0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: candidates !== void 0,
						onClose: closePicker,
						title: t("fetchTitle"),
						closeLabel: t("close"),
						description: t("fetchDescription"),
						className: ModelsSection_module_css_default["fetchDialog"],
						footer: (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
							children: [
								(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									onClick: closePicker,
									children: t("cancel")
								}),
								(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									disabled: emptiesList,
									title: emptiesList ? t("fetchKeepOne") : void 0,
									onClick: adoptPicked,
									children: t("fetchAdopt")
								})
							]
						}),
						children: [
							(0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_css_default["candidateToolbar"],
								children: [
									(0, react_jsx_runtime.jsx)("input", {
										className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["candidateSearch"]}`,
										type: "search",
										value: candidateQuery,
										placeholder: t("fetchSearch"),
										"aria-label": t("fetchSearch"),
										onChange: (event) => {
											setCandidateQuery(event.target.value);
										}
									}),
									(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										variant: "ghost",
										size: "sm",
										disabled: visibleCandidates.length === 0,
										onClick: toggleVisibleCandidates,
										children: t(allVisibleCandidatesPicked ? "fetchDeselectAll" : "fetchSelectAll")
									})
								]
							}),
							visibleCandidates.length === 0
								? (0, react_jsx_runtime.jsx)("p", {
										className: ModelsSection_module_css_default["candidateEmpty"],
										role: "status",
										children: t("fetchNoMatches")
									})
								: (0, react_jsx_runtime.jsx)("ul", {
										className: ModelsSection_module_css_default["candidateList"],
										children: visibleCandidates.map((candidate) =>
											(0, react_jsx_runtime.jsx)(
												"li",
												{
													className: ModelsSection_module_css_default["candidate"],
													children: (0, react_jsx_runtime.jsxs)("label", {
														className: ModelsSection_module_css_default["candidateLabel"],
														children: [
															(0, react_jsx_runtime.jsx)("input", {
																type: "checkbox",
																checked: isPicked(candidate.id),
																onChange: () => {
																	toggle(candidate.id);
																}
															}),
															(0, react_jsx_runtime.jsx)("span", {
																className: ModelsSection_module_css_default["candidateId"],
																title: candidate.name ?? candidate.id,
																children: candidate.id
															})
														]
													})
												},
												candidate.id
											)
										)
									})
						]
					})
				]
			});
		}
		const PROBE_ROUTE = "\u0000probe"; // BEGIN CLAUDE HELPERS
		// These helpers are inserted into the upstream client module by build-client.mjs.
		const CLAUDE_DISCOVERY_API = "mofeng-anthropic-models";
		const CLAUDE_PROVIDER_SETTINGS_NS = "dsh-claude-provider";
		const CLAUDE_PROVIDER_TYPE = "claude-adaptive";
		const CLAUDE_FIVE_EFFORTS = Object.freeze({
			low: "low",
			medium: "medium",
			high: "high",
			xhigh: "xhigh",
			max: "max"
		});
		const CLAUDE_FOUR_EFFORTS = Object.freeze({ low: "low", medium: "medium", high: "high", max: "max" });
		const CLAUDE_TOGGLE_EFFORTS = Object.freeze({ off: null, high: "high" });
		const CLAUDE_KNOWN_MODELS = Object.freeze({
			"claude-fable-5-2": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-fable-5-1": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-fable-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-haiku-5-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-haiku-4-5-20251001": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
			"claude-haiku-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
			"claude-opus-4-5-20251101": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
			"claude-opus-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
			"claude-opus-4-6": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "four" }),
			"claude-opus-4-7": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-opus-4-8": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-opus-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-opus-5-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-sonnet-4-5-20250929": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
			"claude-sonnet-4-5": Object.freeze({ contextWindow: 200000, maxTokens: 64000, preset: "toggle" }),
			"claude-sonnet-4-6": Object.freeze({ contextWindow: 1000000, maxTokens: 64000, preset: "four" }),
			"claude-sonnet-5-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" }),
			"claude-sonnet-5": Object.freeze({ contextWindow: 1000000, maxTokens: 128000, preset: "five" })
		});
		const CLAUDE_PENDING_MODELS = new WeakSet();

		function reasoningEffortsForPreset(preset) {
			if (preset === "toggle") return { ...CLAUDE_TOGGLE_EFFORTS };
			if (preset === "four") return { ...CLAUDE_FOUR_EFFORTS };
			return { ...CLAUDE_FIVE_EFFORTS };
		}

		function claudeAdaptiveEnabled(model, inherited) {
			const known = CLAUDE_KNOWN_MODELS[model?.id];
			if (known?.preset === "toggle") return false;
			const explicit = model?.compat?.forceAdaptiveThinking;
			if (typeof explicit === "boolean") return explicit;
			if (typeof inherited === "boolean") return inherited;
			return known !== undefined && known.preset !== "toggle";
		}

		function withClaudeAdaptive(model, enabled) {
			return { ...model, compat: { ...model.compat, forceAdaptiveThinking: enabled } };
		}

		// Defaults are applied only when adopting a new model, never when saving an edit.
		function withDefaultClaudeReasoning(model) {
			const known = CLAUDE_KNOWN_MODELS[model.id];
			const next = Object.hasOwn(model, "reasoningEfforts")
				? { ...model }
				: {
						...model,
						reasoningEfforts: reasoningEffortsForPreset(known?.preset ?? "five")
					};
			return typeof next.compat?.forceAdaptiveThinking === "boolean"
				? next
				: withClaudeAdaptive(next, known?.preset !== "toggle");
		}

		function withKnownClaudeInput(model) {
			if (!CLAUDE_KNOWN_MODELS[model?.id] || Array.isArray(model.input)) return { ...model };
			return { ...model, input: ["text", "image"] };
		}

		function withFetchedClaudeMetadata(model) {
			const known = CLAUDE_KNOWN_MODELS[model?.id];
			return withDefaultClaudeReasoning(
				withKnownClaudeInput({
					...model,
					...(known === undefined
						? {}
						: {
								contextWindow: model.contextWindow ?? known.contextWindow,
								maxTokens: model.maxTokens ?? known.maxTokens
							})
				})
			);
		}

		function newClaudeModel() {
			const model = { id: "" };
			CLAUDE_PENDING_MODELS.add(model);
			return model;
		}

		function carryClaudeDraft(model, next) {
			if (CLAUDE_PENDING_MODELS.has(model)) CLAUDE_PENDING_MODELS.add(next);
			return next;
		}

		function finishClaudeDraft(model) {
			return CLAUDE_PENDING_MODELS.has(model) && model.id.trim().length > 0 ? withFetchedClaudeMetadata(model) : model;
		}

		function withNativeClaudeModel(model, inherited) {
			const next = finishClaudeDraft(model);
			return withClaudeAdaptive(next, claudeAdaptiveEnabled(next, inherited));
		}

		function withNativeClaudeProfile(profile) {
			const { compat: currentCompat, ...rest } = profile;
			const compat = { ...currentCompat };
			Reflect.deleteProperty(compat, "forceAdaptiveThinking");
			const models = Array.isArray(profile.models)
				? profile.models.map((model) => withNativeClaudeModel(model, currentCompat?.forceAdaptiveThinking))
				: profile.models;
			const next = {
				...rest,
				...(Object.keys(compat).length ? { compat } : {}),
				...(models === undefined ? {} : { models })
			};
			// A provider-wide default must not refer to a level the edited models no longer offer.
			if (
				typeof next.reasoning === "string" &&
				Array.isArray(models) &&
				models.some((model) => !Object.hasOwn(model.reasoningEfforts ?? {}, next.reasoning))
			) {
				Reflect.deleteProperty(next, "reasoning");
			}
			return next;
		}

		function isClaudeProvider(row, state) {
			const namespace = state.namespaces.get(CLAUDE_PROVIDER_SETTINGS_NS);
			return namespace?.value?.providerTypes?.[row.entry.provider] === CLAUDE_PROVIDER_TYPE;
		}

		function ClaudeAdaptiveThinking({ model, inherited, position, disabled, t, onChange }) {
			const label = `${t("claudeAdaptiveThinking")} ${position}`;
			return react_jsx_runtime.jsxs("div", {
				className: ModelsSection_module_css_default["modelReasoningHead"],
				style: { marginTop: 4, marginBottom: 12 },
				children: [
					react_jsx_runtime.jsxs("span", {
						className: `${ModelsSection_module_css_default["modelFieldLabel"]} ${ModelsSection_module_css_default["modelReasoningLabel"]}`,
						children: [
							t("claudeAdaptiveThinking"),
							react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: t("claudeAdaptiveHelp"),
								side: "right",
								delayMs: 0,
								focusDelayMs: 0,
								portal: true,
								openOnClick: true,
								children: react_jsx_runtime.jsx("button", {
									type: "button",
									className: ModelsSection_module_css_default["helpButton"],
									"aria-label": t("claudeAdaptiveHelpLabel"),
									children: "?"
								})
							})
						]
					}),
					react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Switch, {
						checked: claudeAdaptiveEnabled(model, inherited),
						label,
						disabled: disabled || CLAUDE_KNOWN_MODELS[model.id]?.preset === "toggle",
						onChange: (enabled) => onChange(withClaudeAdaptive(model, enabled))
					})
				]
			});
		}

		// END CLAUDE HELPERS
		function joinProviderDirectory(registered, directory) {
			const active = new Set(registered.map((provider) => provider.id));
			const declared = new Set(directory.map((entry) => entry.provider));
			const rows = directory.map((entry) => ({
				provider: entry.provider,
				displayName: entry.displayName,
				settingsNs: entry.settingsNs,
				settingsPath: [...entry.settingsPath],
				active: active.has(entry.provider),
				...(entry.declared === void 0 ? {} : { declared: entry.declared }),
				...(entry.defaultBaseURL === void 0 ? {} : { defaultBaseURL: entry.defaultBaseURL }),
				...(entry.baseURLEnv === void 0 ? {} : { baseURLEnv: entry.baseURLEnv }),
				...(entry.nativeAuth === void 0 ? {} : { nativeAuth: entry.nativeAuth }),
				...(entry.error === void 0 ? {} : { error: entry.error })
			}));
			for (const provider of registered) {
				if (declared.has(provider.id)) continue;
				rows.push({
					provider: provider.id,
					displayName: provider.name,
					settingsNs: "",
					settingsPath: [],
					active: true
				});
			}
			return rows.toSorted(
				(left, right) =>
					(left.provider === "deepseek-account" ? 0 : left.provider === "deepseek-official" ? 1 : 2) -
					(right.provider === "deepseek-account" ? 0 : right.provider === "deepseek-official" ? 1 : 2)
			);
		}
		function deriveKeyRef(provider) {
			return `${provider.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}_API_KEY`;
		}
		function protocolChoices(namespace, schema) {
			if (namespace === void 0) return [];
			const list = schema.nodeAtPath(schema.rehydrate(namespace.schema), ["providers", PROBE_ROUTE, "api"]);
			if (list?.type !== "union" || list.list === void 0) return [];
			return list.list.map((entry) => entry.value).filter((value) => typeof value === "string");
		}
		function reasoningLevelChoices(namespace, schema) {
			if (namespace === void 0) return [];
			const path = ["providers", PROBE_ROUTE, "models", "0", "reasoningEfforts"];
			return (
				(schema.nodeAtPath(schema.rehydrate(namespace.schema), path)?.list ?? []).find(
					(branch) => branch.type === "dict"
				)?.sKey?.list ?? []
			)
				.map((entry) => entry.value)
				.filter((value) => typeof value === "string");
		}
		function apiKeyEnvOf(namespace, path, schema) {
			if (namespace === void 0) return void 0;
			const profile = schema.getPath(namespace.value, path);
			if (typeof profile !== "object" || profile === null) return void 0;
			const ref = profile.apiKeyEnv;
			return typeof ref === "string" && ref.length > 0 ? ref : void 0;
		}
		var ModelsSettingsStore = class {
			ctx;
			schema;
			describeFace;
			store = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)({
				status: "idle",
				error: null,
				credentialError: null,
				writable: false,
				rows: [],
				namespaces: new Map()
			});
			generation = 0;
			pendingLoads = new Set();
			constructor(ctx, schema, describeFace) {
				this.ctx = ctx;
				this.schema = schema;
				this.describeFace = describeFace;
			}
			load() {
				const pending = Promise.withResolvers();
				this.pendingLoads.add(pending);
				const generation = ++this.generation;
				this.read(generation).then(
					() => {
						this.settleLoads(generation, (load) => {
							load.resolve();
						});
					},
					(error) => {
						this.settleLoads(generation, (load) => {
							load.reject(error);
						});
					}
				);
				return pending.promise;
			}
			async read(generation) {
				this.store.update((s) => {
					s.status = "loading";
					s.error = null;
				});
				const [registered, declared] = await Promise.all([
					this.ctx.remote.llm.listProviders(),
					this.ctx.remote.llm.listConfigurableProviders(),
					this.describeFace.ensure()
				]);
				if (generation !== this.generation) return;
				if (!registered.ok) {
					this.failLoad(registered.error.message);
					return;
				}
				if (!declared.ok) {
					this.failLoad(declared.error.message);
					return;
				}
				const mirrored = this.describeFace.getSnapshot();
				if (mirrored.view === void 0) {
					if (mirrored.error === null) throw new Error("settings describe settled with neither a view nor an error");
					this.failLoad(mirrored.error);
					return;
				}
				const providers = joinProviderDirectory(registered.value, declared.value);
				const writable = mirrored.view.writable;
				const views = mirrored.view.namespaces;
				const namespaces = new Map(views.map((view) => [view.ns, view]));
				const rows = providers.map((entry) => {
					const namespace = namespaces.get(entry.settingsNs);
					return {
						entry,
						configured:
							namespace !== void 0 &&
							(entry.settingsPath.length === 0 || this.schema.getPath(namespace.value, entry.settingsPath) !== void 0),
						removable:
							namespace !== void 0 &&
							entry.settingsPath.length > 0 &&
							this.schema.hasPath(namespace.user, entry.settingsPath) &&
							!this.schema.hasPath(namespace.base, entry.settingsPath),
						apiKeyEnv:
							entry.provider === "deepseek-account" ? void 0 : apiKeyEnvOf(namespace, entry.settingsPath, this.schema),
						credential: void 0
					};
				});
				if (rows.some((row) => row.entry.provider === "deepseek-account")) {
					const catalog = await this.ctx.remote.session.modelCatalog();
					for (const row of rows)
						if (row.entry.provider === "deepseek-account")
							row.accountAvailable =
								catalog.ok &&
								catalog.value.groups.some((group) => group.id === "deepseek-account" && group.models.length > 0);
				}
				const refs = [
					...new Set(
						rows
							.filter((row) => row.entry.provider !== "deepseek-account")
							.flatMap((row) =>
								row.apiKeyEnv === void 0
									? [deriveKeyRef(row.entry.provider), ...(row.entry.nativeAuth?.env ?? [])]
									: [row.apiKeyEnv]
							)
					)
				];
				const credentials = {};
				let credentialError = null;
				for (let index = 0; index < refs.length; index += 64) {
					const response = await this.ctx.remote.credentials.describe(refs.slice(index, index + 64));
					if (response.ok) Object.assign(credentials, response.value);
					else {
						credentialError = response.error.message;
						break;
					}
				}
				if (generation !== this.generation) return;
				this.store.update((s) => {
					s.status = "ready";
					s.error = null;
					s.credentialError = credentialError;
					s.writable = writable;
					s.rows = rows
						.filter((row) => row.entry.provider !== "deepseek-account" || row.accountAvailable === true)
						.map((row) => {
							if (row.entry.provider === "deepseek-account") return row;
							const named = row.apiKeyEnv === void 0 ? void 0 : credentials[row.apiKeyEnv];
							const derived = row.apiKeyEnv !== void 0 ? void 0 : credentials[deriveKeyRef(row.entry.provider)];
							return {
								...row,
								...(named === void 0 ? {} : { credential: named }),
								...(derived === void 0 ? {} : { derivedCredential: derived }),
								...(credentialError === null
									? {
											credentialChecks: Object.fromEntries(
												(row.apiKeyEnv === void 0 ? (row.entry.nativeAuth?.env ?? []) : [row.apiKeyEnv]).flatMap(
													(ref) => {
														const info = credentials[ref];
														return info === void 0 ? [] : [[ref, info]];
													}
												)
											)
										}
									: {})
							};
						});
					s.namespaces = namespaces;
				});
			}
			settleLoads(generation, settle) {
				if (generation !== this.generation) return;
				const pending = [...this.pendingLoads];
				this.pendingLoads.clear();
				for (const load of pending) settle(load);
			}
			failLoad(message) {
				this.store.update((s) => {
					s.status = "error";
					s.error = message;
				});
			}
		};
		function providerUsable(row) {
			if (!row.entry.active) return false;
			if (row.entry.provider === "deepseek-account") return row.accountAvailable === true;
			if (row.apiKeyEnv === void 0) return true;
			return row.credential?.configured === true;
		}
		function onboardingReadiness(state) {
			if ((state.status === "idle" || state.status === "loading") && state.rows.length === 0)
				return { kind: "loading" };
			if (state.status === "error") return { kind: "unavailable", reason: "load-failed" };
			if (state.rows.some(providerUsable)) return { kind: "provider-ready" };
			const row = state.rows.find(
				(candidate) =>
					candidate.entry.provider === "deepseek-official" &&
					candidate.entry.settingsNs === "llm-deepseek" &&
					candidate.entry.settingsPath.length === 0
			);
			if (row === void 0) return { kind: "adapter-absent" };
			if (!row.entry.active) return { kind: "unavailable", reason: "provider-inactive" };
			if (state.credentialError !== null || row.credential === void 0)
				return { kind: "unavailable", reason: "credentials-unavailable" };
			if (!state.writable) return { kind: "unavailable", reason: "settings-read-only" };
			if (!row.credential.writable) return { kind: "unavailable", reason: "credential-read-only" };
			return { kind: "credential-missing" };
		}
		const PROTOCOL_LABEL_KEYS = {
			"openai-completions": "protocolOpenAiCompletions",
			"openai-responses": "protocolOpenAiResponses",
			"anthropic-messages": "protocolAnthropicMessages",
			"google-generative-ai": "protocolGemini"
		};
		function protocolLabel(t, protocol) {
			const key = PROTOCOL_LABEL_KEYS[protocol];
			return key === void 0 ? protocol : t(key);
		}
		const GEMINI = "google-generative-ai";
		const GEMINI_LEVELS = ["minimal", "low", "medium", "high"];
		function protocolNeedsKey(protocol) {
			return protocol === GEMINI;
		}
		function protocolReasoningLevels(protocol, levels) {
			if (protocol !== GEMINI) return { levels, levelsOnly: false };
			return { levels: levels.filter((level) => GEMINI_LEVELS.includes(level)), levelsOnly: true };
		}
		const NS$1 = "llm-pi-ai";
		const ROUTE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
		const BASE_URL_PLACEHOLDERS = {
			"anthropic-messages": "customAnthropicBaseUrlPlaceholder",
			"google-generative-ai": "customGeminiBaseUrlPlaceholder"
		};
		function isHttpUrl(value) {
			try {
				const protocol = new URL(value).protocol;
				return protocol === "http:" || protocol === "https:";
			} catch {
				return false;
			}
		}
		function CustomProviderCard(props) {
			const { taken, protocols, reasoningLevels, operations, t, onBusyChange } = props;
			const [openedAt] = (0, react.useState)(() => props.revision);
			const [route, setRoute] = (0, react.useState)("");
			const [displayName, setDisplayName] = (0, react.useState)("");
			const [baseURL, setBaseURL] = (0, react.useState)("");
			const providerType = props.providerType ?? "generic";
			const isAdaptiveClaude = providerType === CLAUDE_PROVIDER_TYPE;
			const [protocol, setProtocol] = (0, react.useState)(
				isAdaptiveClaude ? "anthropic-messages" : (protocols[0] ?? "")
			);
			const [keyDraft, setKeyDraft] = (0, react.useState)("");
			const [models, setModels] = (0, react.useState)([]);
			const [busy, setBusy] = (0, react.useState)(false);
			const [listBusy, setListBusy] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				onBusyChange?.(busy || listBusy);
			}, [busy, listBusy, onBusyChange]);
			const [failure, setFailure] = (0, react.useState)(void 0);
			const [committed, setCommitted] = (0, react.useState)(false);
			const disabled = props.readOnly || busy;
			const profileDisabled = disabled || committed;
			const routeInvalid = route.length > 0 && !ROUTE_PATTERN.test(route);
			const routeTaken = taken.includes(route);
			const normalizedBaseURL = baseURL.trim();
			const baseUrlInvalid = baseURL.length > 0 && !isHttpUrl(normalizedBaseURL);
			const reasoning = protocolReasoningLevels(protocol, reasoningLevels);
			const modelFailure =
				validateDeepSeekModels(models) ??
				validateReasoningEfforts(models, reasoning.levelsOnly ? reasoning.levels : void 0);
			const keyMissing = protocolNeedsKey(protocol) && keyDraft.trim().length === 0;
			const keyFailure = keyMissing ? "keyRequired" : apiKeyFailure(keyDraft);
			const keyValue = keyDraft.trim();
			const ready =
				route.length > 0 &&
				!routeInvalid &&
				!routeTaken &&
				normalizedBaseURL.length > 0 &&
				!baseUrlInvalid &&
				models.length > 0 &&
				modelFailure === void 0 &&
				keyFailure === void 0;
			const hint =
				failure !== void 0 ||
				ready ||
				keyFailure !== void 0 ||
				route.length === 0 ||
				routeInvalid ||
				routeTaken ||
				baseUrlInvalid
					? void 0
					: normalizedBaseURL.length === 0
						? t("customNeedsBaseUrl")
						: modelFailure !== void 0
							? `${t("model")} ${String(modelFailure.index + 1)}: ${t(modelFailure.key)}`
							: t("customNeedsModels");
			const createOnce = async () => {
				const keyRef = deriveKeyRef(route);
				const storesKey = keyValue.length > 0;
				if (!committed) {
					const profile = {
						...(displayName.length === 0 ? {} : { displayName }),
						...(storesKey ? { apiKeyEnv: keyRef } : {}),
						api: isAdaptiveClaude ? "anthropic-messages" : protocol,
						baseURL: normalizedBaseURL,
						models: models.map((model) => (isAdaptiveClaude ? withNativeClaudeModel(model) : { ...model })),
						...(isAdaptiveClaude ? { reasoning: "high" } : {})
					};
					const written = await operations.writeSettings(
						NS$1,
						[
							{
								op: "set",
								path: ["providers", route],
								value: isAdaptiveClaude ? withNativeClaudeProfile(profile) : profile
							}
						],
						openedAt
					);
					if (written.kind !== "written") return written.kind === "conflict" ? t("conflict") : written.message;
					setCommitted(true);
				}
				if (isAdaptiveClaude) {
					const typed = await operations.writeSettings(
						CLAUDE_PROVIDER_SETTINGS_NS,
						[
							{
								op: "set",
								path: ["providerTypes", route],
								value: CLAUDE_PROVIDER_TYPE
							}
						],
						void 0
					);
					if (typed.kind !== "written") return typed.kind === "conflict" ? t("conflict") : typed.message;
				}
				if (storesKey) {
					const stored = await operations.storeCredential(keyRef, keyValue);
					if (stored !== void 0) return stored;
				}
			};
			const create = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const outcome = await createOnce();
					if (outcome !== void 0) {
						setFailure(outcome);
						return;
					}
					props.onClose(true);
				} finally {
					setBusy(false);
				}
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_css_default["editor"],
				children: [
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["field"],
						children: [
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["fieldLabel"],
								children: t("customRoute")
							}),
							(0, react_jsx_runtime.jsx)("input", {
								className: ModelsSection_module_css_default["input"],
								type: "text",
								value: route,
								placeholder: "acme-gateway",
								"aria-label": t("customRoute"),
								disabled: profileDisabled,
								onChange: (event) => {
									setRoute(event.target.value);
								}
							})
						]
					}),
					routeInvalid || routeTaken
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["error"],
								children: t(routeInvalid ? "customRouteInvalid" : "customRouteTaken")
							})
						: (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["advancedHint"],
								children: t("customRouteHint")
							}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["field"],
						children: [
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["fieldLabel"],
								children: t("customDisplayName")
							}),
							(0, react_jsx_runtime.jsx)("input", {
								className: ModelsSection_module_css_default["input"],
								type: "text",
								value: displayName,
								placeholder: route.length === 0 ? t("customDisplayName") : route,
								"aria-label": t("customDisplayName"),
								disabled: profileDisabled,
								onChange: (event) => {
									setDisplayName(event.target.value);
								}
							})
						]
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["field"],
						children: [
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["fieldLabel"],
								children: t("baseUrl")
							}),
							(0, react_jsx_runtime.jsx)("input", {
								className: ModelsSection_module_css_default["input"],
								type: "text",
								value: baseURL,
								placeholder: t(BASE_URL_PLACEHOLDERS[protocol] ?? "customBaseUrlPlaceholder"),
								"aria-label": t("baseUrl"),
								"aria-invalid": baseUrlInvalid,
								disabled: profileDisabled,
								onChange: (event) => {
									setBaseURL(event.target.value);
								}
							})
						]
					}),
					baseUrlInvalid
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["error"],
								children: t("customBaseUrlInvalid")
							})
						: null,
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["field"],
						children: [
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["fieldLabel"],
								children: t("customApi")
							}),
							(0, react_jsx_runtime.jsx)("select", {
								className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["selectInput"]}`,
								value: protocol,
								"aria-label": t("customApi"),
								disabled: profileDisabled || isAdaptiveClaude,
								onChange: (event) => {
									setProtocol(event.target.value);
								},
								children: protocols.map((choice) =>
									(0, react_jsx_runtime.jsx)("option", { value: choice, children: protocolLabel(t, choice) }, choice)
								)
							})
						]
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["field"],
						children: [
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["fieldLabel"],
								children: t("keyInput")
							}),
							(0, react_jsx_runtime.jsx)(ApiKeyInput, {
								t,
								value: keyDraft,
								placeholder: t("keyPlaceholder"),
								"aria-label": t("keyInput"),
								required: protocolNeedsKey(protocol),
								disabled,
								onChange: (event) => {
									setKeyDraft(event.target.value);
								}
							}),
							keyFailure === void 0
								? null
								: (0, react_jsx_runtime.jsx)("p", {
										className: ModelsSection_module_css_default[keyMissing ? "advancedHint" : "error"],
										children: t(keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure)
									})
						]
					}),
					(0, react_jsx_runtime.jsx)(ModelListEditor, {
						models,
						onChange: setModels,
						reasoningLevels: reasoning.levels,
						reasoningLevelsOnly: reasoning.levelsOnly,
						probe: {
							settingsNs: NS$1,
							baseURL: normalizedBaseURL,
							api: protocol,
							...(keyValue.length === 0 ? {} : { apiKey: keyValue })
						},
						probeBlocked: baseUrlInvalid
							? "customBaseUrlInvalid"
							: keyFailure === "keyBlank"
								? "keyBlankNew"
								: keyFailure,
						thinkingPresets: isAdaptiveClaude,
						operations,
						t,
						disabled: profileDisabled,
						onBusyChange: setListBusy
					}),
					failure !== void 0
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["error"],
								children: failure
							})
						: null,
					hint === void 0
						? null
						: (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["advancedHint"],
								children: hint
							}),
					(0, react_jsx_runtime.jsx)(EditorFooter, {
						t,
						busy,
						submitDisabled: disabled || !ready,
						submitLabelKey: "create",
						submitBusyLabelKey: "creating",
						onCancel: () => {
							props.onClose(committed);
						},
						onSubmit: () => {
							create();
						}
					})
				]
			});
		}
		const LABELS = new Map([
			["normal", "retryModeNormal"],
			["always", "retryModeAlways"],
			["maxRetries", "retryMaxRetries"],
			["retryableCodes", "retryCodes"],
			["backoff", "retryBackoff"],
			["initialDelayMs", "retryInitialDelay"],
			["maxDelayMs", "retryMaxDelay"],
			["jitterRatio", "retryJitter"]
		]);
		const MODE_HINTS = new Map([["always", "retryAlwaysHint"]]);
		const CODE_LABELS = new Map([
			["EMPTY_RESPONSE", "retryCodeEmptyResponse"],
			["RATE_LIMIT", "retryCodeRateLimit"],
			["SERVER", "retryCodeServer"],
			["TIMEOUT", "retryCodeTimeout"],
			["TRANSPORT", "retryCodeTransport"],
			["STREAM_CLOSED", "retryCodeStreamClosed"],
			["MALFORMED_RESPONSE", "retryCodeMalformedResponse"],
			["QUOTA", "retryCodeQuota"]
		]);
		const DECIMAL = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/iu;
		const DELAY_ORDER = [
			["backoff", "initialDelayMs"],
			["backoff", "maxDelayMs"]
		];
		function isRecord$1(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		function fieldAt(value, path) {
			return path.reduce((node, key) => (isRecord$1(node) ? node[key] : void 0), value);
		}
		function modeOf(branch) {
			const mode = branch.dict?.["mode"]?.value;
			return typeof mode === "string" ? mode : void 0;
		}
		function choicesOf(node) {
			return (node.inner?.list ?? []).flatMap((branch) => {
				const value = branch.type === "const" ? branch.value : void 0;
				return typeof value === "string" ? [value] : [];
			});
		}
		function fieldsOf(node) {
			return Object.entries(node.dict ?? {}).filter(([key]) => key !== "mode");
		}
		function retryPolicyDefaults(schema, node, inherited) {
			const branches = new Map(
				(node.list ?? []).flatMap((branch) => {
					const mode = modeOf(branch);
					return mode === void 0 ? [] : [[mode, branch]];
				})
			);
			const modes = [...branches.keys()];
			const stored = schema.getPath(inherited, ["mode"]);
			return {
				modes,
				mode: typeof stored === "string" && branches.has(stored) ? stored : (modes[0] ?? ""),
				branch: (mode) => (typeof mode === "string" ? branches.get(mode) : void 0),
				value: (branch, path) => {
					const value = schema.getPath(inherited, path);
					if (value !== void 0) return value;
					return schema.nodeAtPath(branch, path)?.meta.default;
				}
			};
		}
		function numberFailure(node, value, t) {
			if (typeof value !== "number" || !Number.isFinite(value)) return t("retryValueNumber");
			const { min, max, step } = node.meta;
			if (step === 1 && !Number.isInteger(value)) return t("retryValueInteger");
			if (min === Number.MIN_VALUE && value <= 0) return t("retryValuePositive");
			if (typeof min === "number" && value < min) return t("retryValueMin").replace("{min}", () => String(min));
			if (typeof max === "number" && value > max) return t("retryValueMax").replace("{max}", () => String(max));
		}
		function retryPolicyFailure(schema, node, policy, defaults, t) {
			if (policy === void 0) return void 0;
			const whole = () => {
				const message = schema.validate(node, policy);
				return message === void 0 ? void 0 : { message };
			};
			if (!isRecord$1(policy)) return whole();
			const branch = defaults.branch(policy["mode"]);
			if (branch === void 0) return whole();
			const read = (path) => schema.getPath(policy, path) ?? defaults.value(branch, path);
			const check = (owner, base) => {
				for (const [key, field] of fieldsOf(owner)) {
					const path = [...base, key];
					if (field.type === "object") {
						const nested = check(field, path);
						if (nested !== void 0) return nested;
					} else if (field.type === "number") {
						const value = read(path);
						const message = value === void 0 ? void 0 : numberFailure(field, value, t);
						if (message !== void 0) return { message, path };
					} else if (field.type === "array") {
						const stored = schema.getPath(policy, path);
						if (stored === void 0) continue;
						if (schema.validate(field, stored) !== void 0) return { message: t("retryCodesInvalid"), path };
						if (Array.isArray(stored) && new Set(stored).size !== stored.length)
							return { message: t("retryCodesDuplicate"), path };
					}
				}
			};
			const failure = check(branch, []);
			if (failure !== void 0) return failure;
			const [lowerPath, upperPath] = DELAY_ORDER;
			const lower = read(lowerPath);
			const upper = read(upperPath);
			if (typeof lower === "number" && typeof upper === "number" && lower > upper)
				return { message: t("retryDelayOrder"), path: lowerPath };
			return whole();
		}
		function textOf(value) {
			return typeof value === "number" || typeof value === "string" ? String(value) : "";
		}
		function withField(policy, path, value) {
			const [key, ...rest] = path;
			if (key === void 0) return policy;
			const result = { ...policy };
			const prior = result[key];
			const next = rest.length === 0 ? value : withField(isRecord$1(prior) ? prior : {}, rest, value);
			if (next === void 0 || (isRecord$1(next) && Object.keys(next).length === 0)) Reflect.deleteProperty(result, key);
			else result[key] = next;
			return result;
		}
		function RetryPolicyEditor(props) {
			const { t, disabled, defaults, failure } = props;
			const current = isRecord$1(props.policy) ? props.policy : {};
			const branch = defaults.branch(current["mode"]);
			const mode = branch === void 0 ? void 0 : String(current["mode"]);
			const [texts, setTexts] = (0, react.useState)({});
			const [added, setAdded] = (0, react.useState)({});
			const [openFolds] = (0, react.useState)(
				() => new Set(Object.keys(current).filter((key) => isRecord$1(current[key])))
			);
			const label = (key) => {
				const labelKey = LABELS.get(key);
				return labelKey === void 0 ? key : t(labelKey);
			};
			const invalidAt = (path) => failure?.path?.join(".") === path.join(".");
			const numberField = (root, path, node, className) => {
				const id = path.join(".");
				const invalid = invalidAt(path);
				const storedValue = fieldAt(current, path);
				return (0, react_jsx_runtime.jsxs)(
					"label",
					{
						className,
						children: [
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["modelFieldLabel"],
								children: label(path[path.length - 1])
							}),
							(0, react_jsx_runtime.jsx)("input", {
								className: ModelsSection_module_css_default["input"],
								type: "text",
								inputMode: node.meta.step === 1 ? "numeric" : "decimal",
								value: texts[id] ?? textOf(storedValue),
								placeholder: textOf(defaults.value(root, path)),
								"aria-invalid": invalid,
								"aria-describedby": invalid ? props.failureId : void 0,
								disabled,
								onChange: (event) => {
									const trimmed = event.target.value.trim();
									setTexts((previous) => ({ ...previous, [id]: trimmed.length === 0 ? "" : event.target.value }));
									const value = DECIMAL.test(trimmed) ? Number(trimmed) : trimmed;
									props.onChange(withField(current, path, value === "" ? void 0 : value));
								}
							})
						]
					},
					id
				);
			};
			const codesField = (root, path, node) => {
				const id = path.join(".");
				const strings = (value) => (Array.isArray(value) ? value.filter((code) => typeof code === "string") : []);
				const inherited = strings(defaults.value(root, path));
				const storedCodes = fieldAt(current, path);
				const selected = Array.isArray(storedCodes) ? strings(storedCodes) : inherited;
				const choices = [...new Set([...choicesOf(node), ...inherited, ...selected, ...(added[id] ?? [])])];
				const invalid = invalidAt(path);
				const select = (next) => {
					const inherits = next.length === inherited.length && next.every((value) => inherited.includes(value));
					props.onChange(withField(current, path, inherits ? void 0 : [...next]));
				};
				const draftCode = (texts[id] ?? "").trim();
				const add = () => {
					if (draftCode.length === 0) return;
					setAdded((previous) => ({ ...previous, [id]: [...new Set([...(previous[id] ?? []), draftCode])] }));
					setTexts((previous) => ({ ...previous, [id]: "" }));
					if (!selected.includes(draftCode)) select([...selected, draftCode]);
				};
				return (0, react_jsx_runtime.jsxs)(
					"fieldset",
					{
						className: ModelsSection_module_css_default["modelInputTypes"],
						"aria-invalid": invalid,
						"aria-describedby": invalid ? props.failureId : void 0,
						children: [
							(0, react_jsx_runtime.jsx)("legend", {
								className: ModelsSection_module_css_default["modelFieldLabel"],
								children: label(path[path.length - 1])
							}),
							(0, react_jsx_runtime.jsx)("div", {
								className: ModelsSection_module_css_default["retryCodeChoices"],
								children: choices.map((code) => {
									const labelKey = CODE_LABELS.get(code);
									return (0, react_jsx_runtime.jsx)(
										_deepseek_ai_dsh_client_ui_primitives.Checkbox,
										{
											label: labelKey === void 0 ? code : t(labelKey),
											checked: selected.includes(code),
											disabled: disabled || (selected.length === 1 && selected.includes(code)),
											onChange: (checked) => {
												select(choices.filter((value) => (value === code ? checked : selected.includes(value))));
											}
										},
										code
									);
								})
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_css_default["retryCodeAdd"],
								children: [
									(0, react_jsx_runtime.jsx)("input", {
										className: ModelsSection_module_css_default["input"],
										type: "text",
										value: texts[id] ?? "",
										placeholder: t("retryCodeCustom"),
										"aria-label": t("retryCodeCustom"),
										disabled,
										onChange: (event) => {
											const value = event.target.value;
											setTexts((previous) => ({ ...previous, [id]: value }));
										},
										onKeyDown: (event) => {
											if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
											event.preventDefault();
											add();
										}
									}),
									(0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelsSection_module_css_default["secondaryButton"],
										disabled: disabled || draftCode.length === 0,
										onClick: add,
										children: t("retryCodeAdd")
									})
								]
							})
						]
					},
					path.join(".")
				);
			};
			const fields = (root, owner, base) =>
				fieldsOf(owner).map(([key, node]) => {
					const path = [...base, key];
					if (node.type === "number")
						return numberField(
							root,
							path,
							node,
							base.length === 0
								? `${ModelsSection_module_css_default["modelField"]} ${ModelsSection_module_css_default["retryCount"]}`
								: ModelsSection_module_css_default["modelField"]
						);
					if (node.type === "array") return codesField(root, path, node);
					if (node.type === "object")
						return (0, react_jsx_runtime.jsxs)(
							"details",
							{
								className: ModelsSection_module_css_default["retryFold"],
								open: openFolds.has(key),
								children: [
									(0, react_jsx_runtime.jsx)("summary", {
										className: ModelsSection_module_css_default["customizedSummary"],
										children: label(key)
									}),
									(0, react_jsx_runtime.jsx)("div", {
										className: ModelsSection_module_css_default["retryBackoff"],
										children: fields(root, node, path)
									})
								]
							},
							key
						);
					return null;
				});
			const labelId = `${props.failureId}-label`;
			const hint = mode === void 0 ? void 0 : MODE_HINTS.get(mode);
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_css_default["field"],
				role: "group",
				"aria-labelledby": labelId,
				children: [
					(0, react_jsx_runtime.jsx)("span", {
						id: labelId,
						className: ModelsSection_module_css_default["fieldLabel"],
						children: t("retryPolicy")
					}),
					(0, react_jsx_runtime.jsxs)("select", {
						className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["selectInput"]}`,
						value: mode ?? "",
						"aria-labelledby": labelId,
						"aria-describedby": failure !== void 0 && failure.path === void 0 ? props.failureId : void 0,
						disabled,
						onChange: (event) => {
							const next = defaults.branch(event.target.value);
							setTexts({});
							if (next === void 0) {
								props.onChange(void 0);
								return;
							}
							const declared = new Set(fieldsOf(next).map(([key]) => key));
							const kept = Object.fromEntries(Object.entries(current).filter(([key]) => declared.has(key)));
							props.onChange({ ...kept, mode: event.target.value });
						},
						children: [
							(0, react_jsx_runtime.jsx)("option", {
								value: "",
								children: t("retryModeDefault").replace("{mode}", () => label(defaults.mode))
							}),
							defaults.modes.map((value) =>
								(0, react_jsx_runtime.jsx)("option", { value, children: label(value) }, value)
							)
						]
					}),
					hint === void 0
						? null
						: (0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_css_default["advancedHint"],
								children: t(hint)
							}),
					branch === void 0
						? null
						: (0, react_jsx_runtime.jsx)("div", {
								className: ModelsSection_module_css_default["retryBody"],
								children: fields(branch, branch, [])
							}),
					failure === void 0 || !props.showFailure
						? null
						: (0, react_jsx_runtime.jsx)("p", {
								id: props.failureId,
								className: ModelsSection_module_css_default["error"],
								children: failure.message
							})
				]
			});
		}
		function draftAt(schema, namespace, path) {
			const subtree = schema.getPath(namespace.user, path);
			if (typeof subtree !== "object" || subtree === null || Array.isArray(subtree)) return {};
			return structuredClone(subtree);
		}
		function isRecord(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		function pathOps(base, before, after) {
			const previous = isRecord(before) ? before : {};
			const ops = [];
			for (const [key, value] of Object.entries(after)) {
				const prior = previous[key];
				if (JSON.stringify(prior) === JSON.stringify(value)) continue;
				if (isRecord(value) && (prior === void 0 || isRecord(prior)))
					ops.push(...pathOps([...base, key], prior, value));
				else ops.push({ op: "set", path: [...base, key], value });
			}
			for (const key of Object.keys(previous)) if (!(key in after)) ops.push({ op: "unset", path: [...base, key] });
			return ops;
		}
		function layoutOf(ns) {
			if (ns === "llm-deepseek") return "deepseek";
			if (ns === "llm-pi-ai") return "pi-ai";
			return "unknown";
		}
		function refFor(schema, namespace, path, provider) {
			const profile = schema.getPath(namespace.value, path);
			const named = typeof profile === "object" && profile !== null ? profile.apiKeyEnv : void 0;
			return typeof named === "string" && named.length > 0 ? named : deriveKeyRef(provider);
		}
		function ProviderEditor(props) {
			const { namespace, schema, settingsPath, operations, t } = props;
			const [draft, setDraft] = (0, react.useState)(() => {
				const loaded = draftAt(schema, namespace, settingsPath);
				const policy = loaded["retryPolicy"];
				if (!isRecord(policy) || policy["mode"] !== void 0) return loaded;
				const path = [...settingsPath, "retryPolicy"];
				const node = schema.nodeAtPath(schema.rehydrate(namespace.schema), path);
				if (node === void 0) return loaded;
				const { mode } = retryPolicyDefaults(schema, node, schema.getPath(namespace.base, path));
				return { ...loaded, retryPolicy: { ...policy, mode } };
			});
			const [keyDraft, setKeyDraft] = (0, react.useState)();
			const keyText = typeof keyDraft === "string" ? keyDraft : "";
			const keyRemoval = typeof keyDraft === "object" ? keyDraft : void 0;
			const [busy, setBusy] = (0, react.useState)(false);
			const [listBusy, setListBusy] = (0, react.useState)(false);
			const { onBusyChange } = props;
			(0, react.useEffect)(() => {
				onBusyChange?.(busy || listBusy);
			}, [busy, listBusy, onBusyChange]);
			const [failure, setFailure] = (0, react.useState)(void 0);
			const [customizedOpen, setCustomizedOpen] = (0, react.useState)(false);
			const [committedOriginal, setCommittedOriginal] = (0, react.useState)(() =>
				schema.getPath(namespace.user, settingsPath)
			);
			const [expectedRevision, setExpectedRevision] = (0, react.useState)(() => namespace.revision);
			const root = (0, react.useMemo)(() => schema.rehydrate(namespace.schema), [namespace.schema, schema]);
			const node = (0, react.useMemo)(() => schema.nodeAtPath(root, settingsPath), [root, schema, settingsPath]);
			const fallback = schema.getPath(namespace.value, settingsPath);
			const disabled = props.readOnly || busy;
			const layout = layoutOf(namespace.ns);
			const keyRef = refFor(schema, namespace, settingsPath, props.provider);
			const protocols = (0, react.useMemo)(
				() => (layout === "pi-ai" ? protocolChoices(namespace, schema) : []),
				[layout, namespace, schema]
			);
			const stringAt = (source, key) => {
				const value = schema.getPath(source, [key]);
				return typeof value === "string" && value.trim().length > 0 ? value : void 0;
			};
			const setField = (key, next) => {
				const value = next === void 0 || next.trim().length === 0 ? void 0 : next;
				setDraft((current) =>
					value === void 0 ? schema.deletePath(current, [key]) : schema.setPath(current, [key], value)
				);
			};
			const clearsDerivedRef =
				keyRemoval !== void 0 &&
				layout === "pi-ai" &&
				props.nativeAuth !== void 0 &&
				stringAt(draft, "apiKeyEnv") === deriveKeyRef(props.provider);
			const schemaReasoningLevels = (0, react.useMemo)(
				() => (layout === "pi-ai" ? reasoningLevelChoices(namespace, schema) : []),
				[layout, namespace, schema]
			);
			const probeApi = stringAt(draft, "api") ?? stringAt(fallback, "api");
			const reasoning = protocolReasoningLevels(probeApi, schemaReasoningLevels);
			const editsReasoning = reasoning.levels.length > 0;
			const validateModels = (value) =>
				validateDeepSeekModels(value) ??
				(editsReasoning ? validateReasoningEfforts(value, reasoning.levelsOnly ? reasoning.levels : void 0) : void 0);
			const modelFailure = validateModels(
				schema.getPath(draft, ["models"]) ?? (reasoning.levelsOnly ? schema.getPath(fallback, ["models"]) : void 0)
			);
			const retryNode = (0, react.useMemo)(
				() => (layout === "unknown" ? void 0 : schema.nodeAtPath(root, [...settingsPath, "retryPolicy"])),
				[layout, root, schema, settingsPath]
			);
			const retryDefaults =
				retryNode === void 0
					? void 0
					: retryPolicyDefaults(schema, retryNode, schema.getPath(namespace.base, [...settingsPath, "retryPolicy"]));
			const retryFailure =
				retryNode === void 0 || retryDefaults === void 0 || props.credentialOnly === true
					? void 0
					: retryPolicyFailure(schema, retryNode, schema.getPath(draft, ["retryPolicy"]), retryDefaults, t);
			const keyFailure = apiKeyFailure(keyText);
			const keyValue = keyText.trim();
			const protocolNeedsKeyHere =
				layout === "pi-ai" &&
				protocolNeedsKey(probeApi) &&
				stringAt(draft, "apiKeyEnv") === void 0 &&
				stringAt(fallback, "apiKeyEnv") === void 0;
			const protocolKeyMissing = protocolNeedsKeyHere && keyValue.length === 0;
			const shownKeyFailure =
				((props.credentialRequired === true && keyText.length > 0 && keyValue.length === 0) || protocolKeyMissing
					? "keyRequired"
					: void 0) ?? keyFailure;
			const probeBaseURL = stringAt(draft, "baseURL") ?? stringAt(fallback, "baseURL");
			const probe = {
				settingsNs: namespace.ns,
				provider: props.provider,
				...(probeBaseURL === void 0 ? {} : { baseURL: probeBaseURL }),
				...(probeApi === void 0 ? {} : { api: probeApi }),
				...(keyValue.length === 0 ? {} : { apiKey: keyValue })
			};
			const applyOnce = async () => {
				const ns = namespace.ns;
				const profileDraft = clearsDerivedRef ? schema.deletePath(draft, ["apiKeyEnv"]) : draft;
				const credentialDraft =
					layout === "pi-ai" &&
					stringAt(profileDraft, "apiKeyEnv") === void 0 &&
					stringAt(schema.getPath(namespace.base, settingsPath), "apiKeyEnv") === void 0 &&
					keyValue.length > 0
						? schema.setPath(profileDraft, ["apiKeyEnv"], keyRef)
						: profileDraft;
				const next = props.thinkingPresets === true ? withNativeClaudeProfile(credentialDraft) : credentialDraft;
				if (props.credentialOnly !== true) {
					const failure = validateModels(schema.getPath(next, ["models"]));
					if (failure !== void 0) return `${t("model")} ${String(failure.index + 1)}: ${t(failure.key)}`;
				}
				if (props.credentialOnly !== true && node !== void 0 && settingsPath.length === 0) {
					const sectionError = schema.validate(node, next);
					if (sectionError !== void 0) return sectionError;
				}
				const materializesNativeProfile =
					layout === "pi-ai" && fallback === void 0 && committedOriginal === void 0 && Object.keys(next).length === 0;
				const ops =
					props.credentialOnly === true
						? []
						: materializesNativeProfile
							? [{ op: "set", path: [...settingsPath], value: {} }]
							: pathOps(settingsPath, committedOriginal, next);
				if (keyRemoval !== void 0 && keyRemoval.removed !== true) {
					const removed = await operations.removeCredential(keyRemoval.ref);
					if (removed !== void 0) return removed;
					setKeyDraft({ ...keyRemoval, removed: true });
				}
				if (ops.length > 0) {
					const written = await operations.writeSettings(ns, ops, expectedRevision);
					if (written.kind !== "written") return written.kind === "conflict" ? t("conflict") : written.message;
					setCommittedOriginal(schema.getPath(written.view.user, settingsPath));
					setExpectedRevision(written.view.revision);
					setDraft(next);
				}
				if (keyValue.length > 0) {
					const stored = await operations.storeCredential(keyRef, keyValue);
					if (stored !== void 0) return stored;
				}
				setKeyDraft("");
			};
			const apply = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const failure = await applyOnce();
					if (failure !== void 0) {
						setFailure(failure);
						return;
					}
					props.onClose(true);
				} finally {
					setBusy(false);
				}
			};
			if (node === void 0)
				return (0, react_jsx_runtime.jsxs)("p", {
					className: ModelsSection_module_css_default["error"],
					children: [props.provider, ": ", props.t("settingsPathUnresolvable")]
				});
			const inheritedModels = () => {
				return (
					schema.getPath(namespace.base, [...settingsPath, "models"]) ??
					schema.nodeAtPath(root, [...settingsPath, "models"])?.meta.default
				);
			};
			const curatedFields = (family) => {
				const ownsIdentity = family === "pi-ai" && props.declared === true;
				const customModels = schema.getPath(draft, ["models"]);
				const modelsOverridden = schema.hasPath(draft, ["models"]);
				const models = modelDrafts(modelsOverridden ? customModels : inheritedModels());
				const defaultContextWindow = schema.getPath(fallback, ["defaultContextWindow"]);
				const defaultMaxTokens = schema.getPath(fallback, ["maxTokens"]);
				const defaultInput = schema.getPath(fallback, ["defaultInput"]);
				const baseURL = stringAt(fallback, "baseURL") ?? props.defaultBaseURL;
				const endpointEnv = props.baseURLEnv ?? [];
				const endpointHint =
					family === "deepseek"
						? t("deepSeekEndpointHint")
						: baseURL === void 0 && endpointEnv.length > 0
							? t("baseUrlEnvironment").replace("{env}", () => endpointEnv.join(", "))
							: void 0;
				const namedRef = clearsDerivedRef
					? stringAt(schema.getPath(namespace.base, settingsPath), "apiKeyEnv")
					: stringAt(fallback, "apiKeyEnv");
				const nativeAuth = namedRef === void 0 ? props.nativeAuth : void 0;
				const authRefs =
					namedRef === void 0 ? (nativeAuth?.env ?? []).filter((ref) => !endpointEnv.includes(ref)) : [namedRef];
				const visibleRefs = authRefs.filter((ref) => !ref.toLowerCase().includes("oauth"));
				const keyHint = visibleRefs[0];
				const checkedRefs = authRefs.map((ref) => [
					ref,
					props.credentialChecks?.[ref] ?? (ref === namedRef ? props.credential : void 0)
				]);
				const detected = checkedRefs.find(([, info]) => info?.configured === true);
				const detectedRef = detected?.[0];
				const detectedVisibleRef = detectedRef === void 0 || !visibleRefs.includes(detectedRef) ? void 0 : detectedRef;
				const missingRefs = checkedRefs.length > 0 && checkedRefs.every(([, info]) => info?.configured === false);
				const savedCredential = detected?.[1]?.source === "file" && detectedVisibleRef !== void 0;
				const credentialHint =
					props.credentialRequired === true
						? void 0
						: keyText.length > 0
							? savedCredential
								? t("keyReplacePending")
								: void 0
							: keyRemoval !== void 0
								? keyRemoval.removed === true
									? t("keyRemoveApplied")
									: keyHint === void 0
										? t("keyRemovePending")
										: t("keyRemovePendingEnvironment").replace("{hint}", () => keyHint)
								: keyHint === void 0
									? void 0
									: savedCredential
										? t("keySaved")
										: t(
												detectedRef === void 0
													? missingRefs
														? "keyFallbackMissing"
														: "keyFallbackUnchecked"
													: detectedVisibleRef === void 0
														? "keyFallbackDetectedHidden"
														: "keyFallbackDetected"
											).replace("{hint}", () => detectedVisibleRef ?? keyHint);
				const keyHelp =
					visibleRefs.length === 0 ? void 0 : t("keyHelp").replace("{env}", () => visibleRefs.join(" / "));
				const authHelp =
					keyHelp === void 0
						? null
						: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: keyHelp,
								side: "right",
								delayMs: 0,
								focusDelayMs: 0,
								portal: true,
								openOnClick: true,
								children: (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: ModelsSection_module_css_default["helpButton"],
									"aria-label": t("authHelp"),
									children: "?"
								})
							});
				const keylessNativeAuth = nativeAuth?.env.length === 0 && nativeAuth.oauth;
				const keyPlaceholder =
					keyHint === void 0 || props.credentialRequired === true
						? t("keyPlaceholder")
						: t("keyPlaceholderFallback").replace("{hint}", () => keyHint);
				const catalogProps = {
					models,
					overridden: modelsOverridden,
					t,
					disabled,
					onChange: (next) => {
						setDraft((current) => schema.setPath(current, ["models"], next));
					},
					onReset: () => {
						setDraft((current) => schema.deletePath(current, ["models"]));
					}
				};
				return (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
					children: [
						keylessNativeAuth
							? null
							: (0, react_jsx_runtime.jsxs)("div", {
									className: ModelsSection_module_css_default["field"],
									children: [
										(0, react_jsx_runtime.jsxs)("span", {
											className: ModelsSection_module_css_default["fieldLabel"],
											children: [t("keyInput"), authHelp]
										}),
										(0, react_jsx_runtime.jsx)(ApiKeyInput, {
											t,
											value: keyText,
											...(keyDraft === void 0 && savedCredential
												? {
														saved: {
															masked: detected[1].masked ?? "",
															...(detected[1].writable
																? {
																		clear: () => {
																			setKeyDraft({ ref: detected[0] });
																			setFailure(void 0);
																		}
																	}
																: {})
														}
													}
												: {}),
											placeholder: keyPlaceholder,
											"aria-label": t("keyInput"),
											"aria-invalid": shownKeyFailure !== void 0 && !protocolKeyMissing,
											"aria-describedby": credentialHint === void 0 ? void 0 : `${props.provider}-credential-hint`,
											required: props.credentialRequired === true || protocolNeedsKeyHere,
											autoFocus: props.autoFocusCredential === true,
											disabled: disabled || keyRemoval?.removed === true,
											onChange: (event) => {
												setKeyDraft(
													event.target.value === "" && savedCredential
														? detected[1].writable
															? { ref: detected[0] }
															: void 0
														: event.target.value
												);
												setFailure(void 0);
											}
										}),
										credentialHint === void 0
											? null
											: (0, react_jsx_runtime.jsx)("p", {
													id: `${props.provider}-credential-hint`,
													className:
														ModelsSection_module_css_default[
															keyRemoval !== void 0 || missingRefs
																? "notice"
																: keyText.length > 0 || detectedRef === void 0
																	? "advancedHint"
																	: "savedNotice"
														],
													children: credentialHint
												}),
										shownKeyFailure === void 0
											? null
											: (0, react_jsx_runtime.jsx)("p", {
													className: ModelsSection_module_css_default[protocolKeyMissing ? "advancedHint" : "error"],
													children: t(shownKeyFailure)
												})
									]
								}),
						props.credentialOnly === true
							? null
							: (0, react_jsx_runtime.jsxs)("details", {
									className: ModelsSection_module_css_default["customized"],
									onToggle: (event) => {
										setCustomizedOpen(event.currentTarget.open);
									},
									children: [
										(0, react_jsx_runtime.jsx)("summary", {
											className: ModelsSection_module_css_default["customizedSummary"],
											children: t("customized")
										}),
										(0, react_jsx_runtime.jsxs)("div", {
											className: ModelsSection_module_css_default["customizedBody"],
											children: [
												ownsIdentity
													? (0, react_jsx_runtime.jsxs)("div", {
															className: ModelsSection_module_css_default["field"],
															children: [
																(0, react_jsx_runtime.jsx)("span", {
																	className: ModelsSection_module_css_default["fieldLabel"],
																	children: t("customDisplayName")
																}),
																(0, react_jsx_runtime.jsx)("input", {
																	className: ModelsSection_module_css_default["input"],
																	type: "text",
																	value: stringAt(draft, "displayName") ?? "",
																	placeholder:
																		stringAt(schema.getPath(namespace.base, settingsPath), "displayName") ??
																		props.provider,
																	"aria-label": t("customDisplayName"),
																	disabled,
																	onChange: (event) => {
																		setField("displayName", event.target.value);
																	}
																})
															]
														})
													: null,
												(0, react_jsx_runtime.jsxs)("div", {
													className: ModelsSection_module_css_default["field"],
													children: [
														(0, react_jsx_runtime.jsx)("span", {
															className: ModelsSection_module_css_default["fieldLabel"],
															children: t("baseUrl")
														}),
														(0, react_jsx_runtime.jsx)("input", {
															className: ModelsSection_module_css_default["input"],
															type: "text",
															value: stringAt(draft, "baseURL") ?? "",
															placeholder:
																family === "deepseek"
																	? t("deepSeekBaseUrl")
																	: baseURL === void 0
																		? t(endpointEnv.length > 0 ? "baseUrlConfigured" : "baseUrlDefault")
																		: t("baseUrlPlaceholder").replace("{url}", () => baseURL),
															"aria-describedby": endpointHint === void 0 ? void 0 : `${props.provider}-endpoint-hint`,
															"aria-label": t("baseUrl"),
															disabled,
															onChange: (event) => {
																setField("baseURL", event.target.value === "" ? void 0 : event.target.value);
															}
														}),
														endpointHint === void 0
															? null
															: (0, react_jsx_runtime.jsx)("span", {
																	id: `${props.provider}-endpoint-hint`,
																	className: ModelsSection_module_css_default["advancedHint"],
																	children: endpointHint
																})
													]
												}),
												ownsIdentity
													? (0, react_jsx_runtime.jsxs)("div", {
															className: ModelsSection_module_css_default["field"],
															children: [
																(0, react_jsx_runtime.jsx)("span", {
																	className: ModelsSection_module_css_default["fieldLabel"],
																	children: t("customApi")
																}),
																(0, react_jsx_runtime.jsxs)("select", {
																	className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["selectInput"]}`,
																	value: probeApi ?? "",
																	"aria-label": t("customApi"),
																	disabled: disabled || props.thinkingPresets === true,
																	onChange: (event) => {
																		setField("api", event.target.value);
																	},
																	children: [
																		probeApi === void 0
																			? (0, react_jsx_runtime.jsx)("option", {
																					value: "",
																					children: t("customApiUnset")
																				})
																			: null,
																		protocols.map((choice) =>
																			(0, react_jsx_runtime.jsx)(
																				"option",
																				{ value: choice, children: protocolLabel(t, choice) },
																				choice
																			)
																		)
																	]
																})
															]
														})
													: null,
												retryDefaults === void 0
													? null
													: (0, react_jsx_runtime.jsx)(RetryPolicyEditor, {
															policy: schema.getPath(draft, ["retryPolicy"]),
															defaults: retryDefaults,
															failure: retryFailure,
															failureId: `${props.provider}-retry-failure`,
															showFailure: customizedOpen,
															t,
															disabled,
															onChange: (next) => {
																setDraft((current) =>
																	next === void 0
																		? schema.deletePath(current, ["retryPolicy"])
																		: schema.setPath(current, ["retryPolicy"], next)
																);
															}
														}),
												family === "deepseek"
													? (0, react_jsx_runtime.jsx)(DeepSeekModelsEditor, {
															...catalogProps,
															defaultContextWindow:
																typeof defaultContextWindow === "number" ? defaultContextWindow : void 0,
															defaultMaxTokens: typeof defaultMaxTokens === "number" ? defaultMaxTokens : void 0
														})
													: (0, react_jsx_runtime.jsx)(ModelListEditor, {
															...catalogProps,
															catalogProvider: props.declared === true ? void 0 : props.provider,
															reasoningLevels: reasoning.levels,
															reasoningLevelsOnly: reasoning.levelsOnly,
															defaultInput: Array.isArray(defaultInput) ? defaultInput : void 0,
															probe,
															probeBlocked: keyRemoval !== void 0 ? "keyRemovePending" : shownKeyFailure,
															thinkingPresets: props.thinkingPresets === true,
															adaptiveFallback: schema.getPath(draft, ["compat", "forceAdaptiveThinking"]),
															operations,
															onBusyChange: setListBusy
														})
											]
										})
									]
								})
					]
				});
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				className:
					props.credentialOnly === true
						? ModelsSection_module_css_default["addBlock"]
						: ModelsSection_module_css_default["editor"],
				children: [
					props.hideTitle === true
						? null
						: (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_css_default["editorHeader"],
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										className: ModelsSection_module_css_default["editorTitle"],
										children: props.displayName
									}),
									props.provider !== props.displayName
										? (0, react_jsx_runtime.jsx)("span", {
												className: ModelsSection_module_css_default["editorRoute"],
												children: props.provider
											})
										: null
								]
							}),
					layout === "unknown"
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["advancedHint"],
								children: `${t("advancedHint")} (${namespace.ns})`
							})
						: curatedFields(layout),
					failure !== void 0
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["error"],
								children: failure
							})
						: null,
					props.credentialOnly === true || modelFailure === void 0
						? null
						: (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["advancedHint"],
								children: `${t("model")} ${String(modelFailure.index + 1)}: ${t(modelFailure.key)}`
							}),
					retryFailure === void 0 || customizedOpen
						? null
						: (0, react_jsx_runtime.jsx)("p", {
								id: `${props.provider}-retry-failure`,
								className: ModelsSection_module_css_default["error"],
								children: retryFailure.message
							}),
					(0, react_jsx_runtime.jsx)(EditorFooter, {
						t,
						busy,
						submitDisabled:
							disabled ||
							layout === "unknown" ||
							(props.credentialOnly !== true && modelFailure !== void 0) ||
							retryFailure !== void 0 ||
							shownKeyFailure !== void 0 ||
							(props.credentialRequired === true && keyValue.length === 0),
						submitLabelKey: props.submitLabelKey ?? "apply",
						submitBusyLabelKey: props.submitBusyLabelKey ?? "applying",
						cancelLabelKey: keyRemoval?.removed === true ? "close" : (props.cancelLabelKey ?? "cancel"),
						onCancel: () => {
							props.onClose(false);
						},
						onSubmit: () => {
							props.onSubmitCredential?.();
							apply();
						}
					})
				]
			});
		}
		function renderProviderEditor({ target, row, ...props }) {
			return (0, react_jsx_runtime.jsx)(ProviderEditor, {
				provider: target.provider,
				displayName: target.displayName,
				settingsPath: target.settingsPath,
				...(target.declared === true ? { declared: true } : {}),
				...(target.defaultBaseURL === void 0 ? {} : { defaultBaseURL: target.defaultBaseURL }),
				...(target.baseURLEnv === void 0 ? {} : { baseURLEnv: target.baseURLEnv }),
				...(target.nativeAuth === void 0 ? {} : { nativeAuth: target.nativeAuth }),
				...(row.credential === void 0 ? {} : { credential: row.credential }),
				...(row.credentialChecks === void 0 ? {} : { credentialChecks: row.credentialChecks }),
				...props
			});
		}
		async function removeProviderProfile(operations, controller, target) {
			if (target.credentialRef !== void 0) {
				const credential = await operations.removeCredential(target.credentialRef);
				if (credential !== void 0) return credential;
			}
			const written = await operations.writeSettings(
				target.settingsNs,
				[{ op: "unset", path: [...target.settingsPath] }],
				void 0
			);
			if (written.kind !== "written") return written.message;
			const typedRemoval = await operations.writeSettings(
				CLAUDE_PROVIDER_SETTINGS_NS,
				[
					{
						op: "unset",
						path: ["providerTypes", target.provider]
					}
				],
				void 0
			);
			if (typedRemoval.kind !== "written") return typedRemoval.message;
			await controller.load();
		}
		function needsSetup(row, anyUsable) {
			if (anyUsable || row.entry.provider === "deepseek-account") return false;
			if (row.entry.settingsPath.length > 0) return false;
			return row.credential?.configured !== true;
		}
		function keyConfiguredOf(row) {
			return row.apiKeyEnv !== void 0
				? row.credential?.configured === true
				: row.derivedCredential?.configured === true;
		}
		function targetOf(row) {
			const managedRef = deriveKeyRef(row.entry.provider);
			const credentialRef =
				row.apiKeyEnv === managedRef && row.credential?.configured === true && row.credential.writable
					? managedRef
					: void 0;
			return {
				provider: row.entry.provider,
				displayName: row.entry.displayName,
				settingsNs: row.entry.settingsNs,
				settingsPath: row.entry.settingsPath,
				...(credentialRef === void 0 ? {} : { credentialRef }),
				...(row.entry.declared === true ? { declared: true } : {}),
				...(row.entry.defaultBaseURL === void 0 ? {} : { defaultBaseURL: row.entry.defaultBaseURL }),
				...(row.entry.baseURLEnv === void 0 ? {} : { baseURLEnv: row.entry.baseURLEnv }),
				...(row.entry.nativeAuth === void 0 ? {} : { nativeAuth: row.entry.nativeAuth })
			};
		}
		function providerTargetLabel(target) {
			return target.provider === target.displayName ? target.provider : `${target.displayName} (${target.provider})`;
		}
		function providerCopy(template, target) {
			return template.replace("{provider}", () => providerTargetLabel(target));
		}
		function ModelsSection(props) {
			const { controller, useSnapshot, operations, schema, t, renderSlot } = props;
			if (controller === void 0 || useSnapshot === void 0 || operations === void 0 || schema === void 0 || t === void 0)
				return null;
			return (0, react_jsx_runtime.jsx)(Loaded, {
				injected: { controller, useSnapshot, operations, schema, t },
				renderSlot
			});
		}
		function Loaded({ injected, renderSlot }) {
			const { controller, operations, schema, t } = injected;
			const snapshot = injected.useSnapshot((value) => value);
			const state = {
				...snapshot,
				rows: snapshot.rows.map((row) =>
					row.entry.provider === "deepseek-account"
						? { ...row, entry: { ...row.entry, displayName: t("deepSeekAccount") } }
						: row
				)
			};
			const [hasReadySnapshot, setHasReadySnapshot] = (0, react.useState)(state.status === "ready");
			if (state.status === "ready" && !hasReadySnapshot) setHasReadySnapshot(true);
			if (state.status === "error" && hasReadySnapshot) setHasReadySnapshot(false);
			const [editing, setEditing] = (0, react.useState)(void 0);
			const [addOpen, setAddOpen] = (0, react.useState)(false);
			const [addMode, setAddMode] = (0, react.useState)("catalog");
			const [visited, setVisited] = (0, react.useState)(() => new Set());
			const [catalogBusy, setCatalogBusy] = (0, react.useState)(false);
			const [customBusy, setCustomBusy] = (0, react.useState)(false);
			const [claudeBusy, setClaudeBusy] = (0, react.useState)(false);
			const addId = (0, react.useId)();
			const [deleteTarget, setDeleteTarget] = (0, react.useState)(void 0);
			const [deleting, setDeleting] = (0, react.useState)(false);
			const [deleteFailure, setDeleteFailure] = (0, react.useState)(void 0);
			const [savedTarget, setSavedTarget] = (0, react.useState)(void 0);
			const [dismissedSetup, setDismissedSetup] = (0, react.useState)(() => new Set());
			const announceSaved = (target) => {
				controller.load().then(() => {
					setSavedTarget(target);
				});
			};
			const closeAdd = () => {
				setEditing(void 0);
				setAddOpen(false);
				setCatalogBusy(false);
				setCustomBusy(false);
				setClaudeBusy(false);
			};
			const closeEditor = (changed, target) => {
				closeAdd();
				if (changed) announceSaved(target);
			};
			const closeSetup = (changed, target) => {
				setDismissedSetup((previous) => new Set([...previous, target.provider]));
				if (changed) announceSaved(target);
			};
			const closeDelete = () => {
				if (deleting) return;
				setDeleteTarget(void 0);
				setDeleteFailure(void 0);
			};
			const confirmDelete = () => {
				if (deleteTarget === void 0 || deleting) return;
				setDeleting(true);
				setDeleteFailure(void 0);
				removeProviderProfile(operations, controller, deleteTarget)
					.then((failure) => {
						if (failure !== void 0) {
							setDeleteFailure(failure);
							return;
						}
						setDeleteTarget(void 0);
					})
					.finally(() => {
						setDeleting(false);
					});
			};
			if (state.status === "idle") controller.load();
			if (state.status === "error") {
				const errorText = state.error ?? "";
				return (0, react_jsx_runtime.jsxs)("div", {
					className: ModelsSection_module_css_default["section"],
					children: [
						(0, react_jsx_runtime.jsx)("p", {
							className: ModelsSection_module_css_default["error"],
							children: `${t("loadFailed")}: ${errorText}`
						}),
						(0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: ModelsSection_module_css_default["secondaryButton"],
							onClick: () => {
								controller.load();
							},
							children: t("retry")
						})
					]
				});
			}
			if (!hasReadySnapshot && state.status !== "ready")
				return (0, react_jsx_runtime.jsxs)("div", {
					className: ModelsSection_module_css_default["section"],
					children: [
						(0, react_jsx_runtime.jsx)("h2", {
							className: ModelsSection_module_css_default["title"],
							children: t("title")
						}),
						(0, react_jsx_runtime.jsx)("p", {
							className: ModelsSection_module_css_default["intro"],
							children: t("intro")
						})
					]
				});
			const savedRow =
				savedTarget === void 0 ? void 0 : state.rows.find((row) => row.entry.provider === savedTarget.provider);
			const savedIdentity =
				savedRow === void 0
					? savedTarget
					: { provider: savedRow.entry.provider, displayName: savedRow.entry.displayName };
			const anyUsable = state.rows.some(providerUsable);
			const configured = state.rows.filter((row) => row.configured);
			const configurable = state.rows.filter((row) => state.namespaces.has(row.entry.settingsNs));
			const addable = state.rows.flatMap((row) => {
				const namespace = state.namespaces.get(row.entry.settingsNs);
				return namespace === void 0 || row.configured ? [] : [{ row, namespace }];
			});
			const piAi = state.namespaces.get("llm-pi-ai");
			const protocols = protocolChoices(piAi, schema);
			const reasoningLevels = reasoningLevelChoices(piAi, schema);
			const catalogOffered = configurable.length > 0;
			const catalogEnabled = addable.length > 0;
			const customOffered = piAi !== void 0;
			const customEnabled = protocols.length > 0;
			const claudeEnabled = customEnabled && state.namespaces.has(CLAUDE_PROVIDER_SETTINGS_NS);
			const bothOffered = customOffered;
			const mode = bothOffered ? addMode : customOffered ? "custom" : "catalog";
			const mounted = (candidate) => mode === candidate || visited.has(candidate);
			const switchLocked = catalogBusy || customBusy || claudeBusy;
			const draft = (() => {
				if (!addOpen || !catalogOffered) return void 0;
				const kept = editing === void 0 ? void 0 : state.namespaces.get(editing.settingsNs);
				if (editing !== void 0 && kept !== void 0) return { target: editing, namespace: kept };
				const first = addable[0];
				return first === void 0 ? void 0 : { target: targetOf(first.row), namespace: first.namespace };
			})();
			const addRow = draft === void 0 ? void 0 : state.rows.find((row) => row.entry.provider === draft.target.provider);
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_css_default["section"],
				children: [
					(0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_css_default["sectionHeader"],
						children: [
							(0, react_jsx_runtime.jsx)("h2", {
								className: ModelsSection_module_css_default["title"],
								children: t("title")
							}),
							(0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["intro"],
								children: t("intro")
							})
						]
					}),
					!state.writable && state.status === "ready"
						? (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["notice"],
								children: t("readOnly")
							})
						: null,
					savedIdentity === void 0
						? null
						: (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_css_default["savedNotice"],
								role: "status",
								"aria-live": "polite",
								children: providerCopy(t("savedProvider"), savedIdentity)
							}),
					(0, react_jsx_runtime.jsx)("ul", {
						className: ModelsSection_module_css_default["rows"],
						children: configured.map((row) => {
							const target = targetOf(row);
							const namespace = state.namespaces.get(target.settingsNs);
							if (namespace === void 0) return null;
							const error =
								row.entry.error === void 0
									? null
									: (0, react_jsx_runtime.jsx)("p", {
											role: "alert",
											className: ModelsSection_module_css_default["error"],
											children: row.entry.error
										});
							if (needsSetup(row, anyUsable) && !dismissedSetup.has(row.entry.provider))
								return (0, react_jsx_runtime.jsxs)(
									"li",
									{
										className: ModelsSection_module_css_default["setupCard"],
										children: [
											error,
											renderProviderEditor({
												target,
												row,
												thinkingPresets: isClaudeProvider(row, state),
												namespace,
												schema,
												operations,
												t,
												readOnly: !state.writable,
												onClose: (changed) => {
													closeSetup(changed, target);
												}
											}),
											renderSlot(
												"settings.models.provider-card",
												{ provider: row.entry, configured: row.configured, keyConfigured: keyConfiguredOf(row) },
												{ entryKey: row.entry.settingsNs }
											)
										]
									},
									row.entry.provider
								);
							const open = !addOpen && editing?.provider === row.entry.provider;
							const adaptiveClaude = isClaudeProvider(row, state);
							const credentialConfigured = row.credential?.configured === true;
							const credentialMissing =
								!credentialConfigured && row.apiKeyEnv !== void 0 && row.credential?.configured === false;
							return (0, react_jsx_runtime.jsxs)(
								"li",
								{
									className: ModelsSection_module_css_default["rowCard"],
									children: [
										(0, react_jsx_runtime.jsxs)("div", {
											className: ModelsSection_module_css_default["rowHead"],
											children: [
												(0, react_jsx_runtime.jsxs)("span", {
													className: ModelsSection_module_css_default["rowIdentity"],
													children: [
														(0, react_jsx_runtime.jsx)("span", {
															className: ModelsSection_module_css_default["rowName"],
															children: row.entry.displayName
														}),
														row.entry.declared === true
															? (0, react_jsx_runtime.jsx)("span", {
																	className: ModelsSection_module_css_default["rowTag"],
																	children: t("customTag")
																})
															: null,
														adaptiveClaude
															? (0, react_jsx_runtime.jsx)("span", {
																	className: ModelsSection_module_css_default["rowTag"],
																	children: t("claudeTypeTag")
																})
															: null,
														row.entry.provider === "deepseek-account"
															? (0, react_jsx_runtime.jsxs)("span", {
																	className: ModelsSection_module_css_default["accountStatus"],
																	children: [
																		(0, react_jsx_runtime.jsx)("span", {
																			className: `${ModelsSection_module_css_default["credentialDot"]} ${ModelsSection_module_css_default["credentialDotConfigured"]}`,
																			"aria-hidden": "true"
																		}),
																		t("accountSignedIn")
																	]
																})
															: null,
														credentialConfigured
															? (0, react_jsx_runtime.jsx)("span", {
																	className: `${ModelsSection_module_css_default["credentialDot"]} ${ModelsSection_module_css_default["credentialDotConfigured"]}`,
																	role: "img",
																	"aria-label": t("credentialConfigured"),
																	title: t("credentialConfigured")
																})
															: credentialMissing
																? (0, react_jsx_runtime.jsx)("span", {
																		className: `${ModelsSection_module_css_default["credentialDot"]} ${ModelsSection_module_css_default["credentialDotMissing"]}`,
																		role: "img",
																		"aria-label": t("credentialMissing"),
																		title: t("credentialMissing")
																	})
																: null
													]
												}),
												(0, react_jsx_runtime.jsxs)("span", {
													className: ModelsSection_module_css_default["rowActions"],
													children: [
														row.entry.provider === "deepseek-account"
															? null
															: (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: ModelsSection_module_css_default["secondaryButton"],
																	"aria-label": providerCopy(t("editProvider"), target),
																	disabled: !open && state.status !== "ready",
																	onClick: () => {
																		if (!open && controller.store.getSnapshot().status !== "ready") return;
																		setSavedTarget(void 0);
																		setAddOpen(false);
																		setEditing(open ? void 0 : target);
																	},
																	children: t("edit")
																}),
														row.removable
															? (0, react_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: ModelsSection_module_css_default["dangerButton"],
																	"aria-label": providerCopy(t("removeProvider"), target),
																	disabled: !state.writable || state.status !== "ready",
																	onClick: () => {
																		if (controller.store.getSnapshot().status !== "ready") return;
																		setSavedTarget(void 0);
																		setDeleteFailure(void 0);
																		setDeleteTarget(target);
																	},
																	children: t("remove")
																})
															: null
													]
												})
											]
										}),
										error,
										renderSlot(
											"settings.models.provider-card",
											{ provider: row.entry, configured: row.configured, keyConfigured: keyConfiguredOf(row) },
											{ entryKey: row.entry.settingsNs }
										),
										open
											? renderProviderEditor({
													target,
													row,
													thinkingPresets: isClaudeProvider(row, state),
													namespace,
													schema,
													operations,
													t,
													readOnly: !state.writable,
													onClose: (changed) => {
														closeEditor(changed, target);
													}
												})
											: null
									]
								},
								row.entry.provider
							);
						})
					}),
					(0, react_jsx_runtime.jsx)("div", {
						className: ModelsSection_module_css_default["addBlock"],
						children: addOpen
							? (0, react_jsx_runtime.jsxs)("div", {
									className: ModelsSection_module_css_default["addCard"],
									children: [
										(0, react_jsx_runtime.jsxs)("div", {
											className: ModelsSection_module_css_default["addModes"],
											children: [
												bothOffered
													? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedControl, {
															id: addId,
															label: t("addMode"),
															value: mode,
															disabled: switchLocked,
															options: [
																{
																	value: "catalog",
																	label: t("addCatalog"),
																	disabled: !catalogEnabled,
																	...(catalogEnabled ? {} : { title: t("addCatalogExhausted") })
																},
																{
																	value: "custom",
																	label: t("addCustom"),
																	disabled: !customEnabled,
																	...(customEnabled ? {} : { title: t("addCustomUnavailable") })
																},
																{ value: "claude", label: t("claudeCustomTitle"), disabled: !claudeEnabled }
															],
															onChange: (next) => {
																setAddMode(next);
																setVisited((previous) => new Set([...previous, next]));
															}
														})
													: (0, react_jsx_runtime.jsx)("div", {
															className: ModelsSection_module_css_default["editorHeader"],
															children: (0, react_jsx_runtime.jsx)("span", {
																className: ModelsSection_module_css_default["editorTitle"],
																children: t(mode === "catalog" ? "addCatalog" : "addCustom")
															})
														}),
												(0, react_jsx_runtime.jsx)("p", {
													hidden: mode === "claude",
													className: ModelsSection_module_css_default["advancedHint"],
													children: t(mode === "catalog" ? "addCatalogHint" : "addCustomHint")
												})
											]
										}),
										mounted("catalog") && draft !== void 0
											? (0, react_jsx_runtime.jsxs)("div", {
													id: `${addId}-catalog-panel`,
													...(bothOffered ? { role: "tabpanel", "aria-labelledby": `${addId}-catalog` } : {}),
													hidden: mode !== "catalog",
													className: ModelsSection_module_css_default["addPanel"],
													children: [
														(0, react_jsx_runtime.jsxs)("div", {
															className: ModelsSection_module_css_default["field"],
															children: [
																(0, react_jsx_runtime.jsx)("span", {
																	className: ModelsSection_module_css_default["fieldLabel"],
																	children: t("provider")
																}),
																(0, react_jsx_runtime.jsx)("select", {
																	className: `${ModelsSection_module_css_default["input"]} ${ModelsSection_module_css_default["selectInput"]}`,
																	value: draft.target.provider,
																	"aria-label": t("provider"),
																	disabled: catalogBusy,
																	onChange: (event) => {
																		const picked = addable.find(
																			(candidate) => candidate.row.entry.provider === event.target.value
																		);
																		if (picked === void 0) return;
																		setEditing(targetOf(picked.row));
																	},
																	children: addable.map(({ row }) =>
																		(0, react_jsx_runtime.jsx)(
																			"option",
																			{ value: row.entry.provider, children: row.entry.displayName },
																			row.entry.provider
																		)
																	)
																})
															]
														}),
														(0, react_jsx_runtime.jsx)(
															ProviderEditor,
															{
																provider: draft.target.provider,
																displayName: draft.target.displayName,
																hideTitle: true,
																namespace: draft.namespace,
																schema,
																settingsPath: draft.target.settingsPath,
																operations,
																...(draft.target.defaultBaseURL === void 0
																	? {}
																	: { defaultBaseURL: draft.target.defaultBaseURL }),
																...(draft.target.baseURLEnv === void 0 ? {} : { baseURLEnv: draft.target.baseURLEnv }),
																...(draft.target.nativeAuth === void 0 ? {} : { nativeAuth: draft.target.nativeAuth }),
																...(addRow?.credentialChecks === void 0
																	? {}
																	: { credentialChecks: addRow.credentialChecks }),
																t,
																readOnly: !state.writable,
																onClose: (changed) => {
																	closeEditor(changed, draft.target);
																},
																onBusyChange: setCatalogBusy
															},
															draft.target.provider
														),
														addRow === void 0
															? null
															: renderSlot(
																	"settings.models.provider-card",
																	{
																		provider: addRow.entry,
																		configured: addRow.configured,
																		keyConfigured: keyConfiguredOf(addRow)
																	},
																	{ entryKey: addRow.entry.settingsNs }
																)
													]
												})
											: null,
										mounted("custom") && piAi !== void 0
											? (0, react_jsx_runtime.jsx)("div", {
													id: `${addId}-custom-panel`,
													...(bothOffered ? { role: "tabpanel", "aria-labelledby": `${addId}-custom` } : {}),
													hidden: mode !== "custom",
													className: ModelsSection_module_css_default["addPanel"],
													children: (0, react_jsx_runtime.jsx)(CustomProviderCard, {
														taken: state.rows.map((row) => row.entry.provider),
														protocols,
														reasoningLevels,
														revision: piAi.revision,
														operations,
														t,
														readOnly: !state.writable,
														onClose: (changed) => {
															closeAdd();
															if (changed) controller.load();
														},
														onBusyChange: setCustomBusy
													})
												})
											: null,
										mounted("claude") && piAi !== void 0
											? (0, react_jsx_runtime.jsx)("div", {
													id: `${addId}-claude-panel`,
													...(bothOffered ? { role: "tabpanel", "aria-labelledby": `${addId}-claude` } : {}),
													hidden: mode !== "claude",
													className: ModelsSection_module_css_default["addPanel"],
													children: (0, react_jsx_runtime.jsx)(CustomProviderCard, {
														providerType: CLAUDE_PROVIDER_TYPE,
														taken: state.rows.map((row) => row.entry.provider),
														protocols,
														reasoningLevels,
														revision: piAi.revision,
														operations,
														t,
														readOnly: !state.writable,
														onClose: (changed) => {
															closeAdd();
															if (changed) controller.load();
														},
														onBusyChange: setClaudeBusy
													})
												})
											: null
									]
								})
							: catalogOffered || customOffered
								? (0, react_jsx_runtime.jsx)("div", {
										className: ModelsSection_module_css_default["addActions"],
										children: (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											className: ModelsSection_module_css_default["addButton"],
											disabled: !state.writable || state.status !== "ready" || (!catalogEnabled && !customEnabled),
											onClick: () => {
												if (controller.store.getSnapshot().status !== "ready") return;
												const first = addable[0];
												const initial = catalogEnabled ? "catalog" : "custom";
												setSavedTarget(void 0);
												setEditing(first === void 0 ? void 0 : targetOf(first.row));
												setAddMode(initial);
												setVisited(new Set([initial]));
												setAddOpen(true);
											},
											children: [
												(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {
													size: 14
												}),
												t("add")
											]
										})
									})
								: null
					}),
					renderSlot("settings.models.footer", {}),
					(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: deleteTarget !== void 0,
						onClose: closeDelete,
						title: deleteTarget === void 0 ? "" : providerCopy(t("deleteTitle"), deleteTarget),
						closeLabel: t("close"),
						description:
							deleteTarget === void 0
								? ""
								: providerCopy(
										deleteTarget.credentialRef === void 0
											? t("deleteDescription")
											: t("deleteDescriptionWithCredential"),
										deleteTarget
									),
						className: ModelsSection_module_css_default["deleteDialog"],
						footer: (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
							children: [
								(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									"data-modal-autofocus": true,
									disabled: deleting,
									onClick: closeDelete,
									children: t("cancel")
								}),
								(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									className: ModelsSection_module_css_default["deleteConfirm"],
									disabled: deleting,
									onClick: confirmDelete,
									children:
										deleteTarget === void 0
											? ""
											: providerCopy(deleting ? t("deleting") : t("deleteConfirm"), deleteTarget)
								})
							]
						}),
						children:
							deleteFailure === void 0
								? null
								: (0, react_jsx_runtime.jsx)("p", {
										className: ModelsSection_module_css_default["error"],
										children: deleteFailure
									})
					})
				]
			});
		}
		var OnboardingModal_module_css_default = {
			body: "jLrgrW_body",
			content: "jLrgrW_content",
			dialog: "jLrgrW_dialog",
			title: "jLrgrW_title"
		};
		const ignoreImplicitDismiss = () => {};
		function OnboardingModal({ title, focusTitle = false, children }) {
			const titleRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				const appRoot = document.getElementById("root");
				if (appRoot === null) return;
				const previous = appRoot.inert;
				appRoot.inert = true;
				return () => {
					appRoot.inert = previous;
				};
			}, []);
			(0, react.useEffect)(() => {
				if (focusTitle) titleRef.current?.focus();
			}, [focusTitle]);
			return (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: true,
				title,
				onClose: ignoreImplicitDismiss,
				headless: true,
				className: OnboardingModal_module_css_default.dialog,
				children: (0, react_jsx_runtime.jsxs)("div", {
					className: OnboardingModal_module_css_default.content,
					children: [
						(0, react_jsx_runtime.jsx)("h2", {
							ref: titleRef,
							className: OnboardingModal_module_css_default.title,
							tabIndex: focusTitle ? -1 : void 0,
							children: title
						}),
						(0, react_jsx_runtime.jsx)("div", { className: OnboardingModal_module_css_default.body, children })
					]
				})
			});
		}
		var DeepSeekOnboardingDialog_module_css_default = { description: "GL8Viq_description", editor: "GL8Viq_editor" };
		function assertNever$1(_value) {
			throw new Error("unexpected DeepSeek onboarding state");
		}
		function DeepSeekOnboardingDialog(props) {
			const {
				complete,
				controller,
				useModels,
				useAutomatic,
				operations,
				schema,
				t,
				renderSlot,
				explicit = false
			} = props;
			const [apiKey, setApiKey] = (0, react.useState)(explicit);
			const [automatic] = (0, react.useState)(useAutomatic((value) => value));
			const state = useModels((snapshot) => snapshot);
			const readiness = onboardingReadiness(state);
			(0, react.useEffect)(() => {
				if ((automatic || explicit) && state.status === "idle") controller.load();
			}, [controller, state.status, automatic, explicit]);
			(0, react.useEffect)(() => {
				if (
					(!automatic && !explicit) ||
					readiness.kind === "adapter-absent" ||
					(!explicit && readiness.kind === "provider-ready") ||
					readiness.kind === "unavailable"
				)
					complete();
			}, [complete, readiness.kind, explicit, automatic]);
			if (!automatic && !explicit) return null;
			switch (readiness.kind) {
				case "loading":
				case "adapter-absent":
				case "unavailable":
					return null;
				case "provider-ready":
					if (!explicit) return null;
					break;
				case "credential-missing":
					break;
				default:
					return assertNever$1(readiness);
			}
			const row = state.rows.find(
				(candidate) =>
					candidate.entry.provider === "deepseek-official" &&
					candidate.entry.settingsNs === "llm-deepseek" &&
					candidate.entry.settingsPath.length === 0
			);
			const namespace = state.namespaces.get("llm-deepseek");
			if (row === void 0 || namespace === void 0) return null;
			const finishCredential = (changed) => {
				if (!changed) {
					complete();
					return;
				}
				controller.load();
			};
			const editor = (0, react_jsx_runtime.jsxs)(OnboardingModal, {
				title: t("onboardingTitle"),
				children: [
					(0, react_jsx_runtime.jsx)("p", {
						className: DeepSeekOnboardingDialog_module_css_default.description,
						children: t("onboardingDescription")
					}),
					(0, react_jsx_runtime.jsx)("div", {
						className: DeepSeekOnboardingDialog_module_css_default.editor,
						children: (0, react_jsx_runtime.jsx)(ProviderEditor, {
							provider: row.entry.provider,
							displayName: row.entry.displayName,
							namespace,
							schema,
							settingsPath: row.entry.settingsPath,
							operations,
							t,
							readOnly: false,
							hideTitle: true,
							credentialOnly: true,
							onSubmitCredential: () => {
								props.track?.("api_key_save_click", {});
							},
							credentialRequired: true,
							autoFocusCredential: true,
							cancelLabelKey: "onboardingLater",
							submitLabelKey: "onboardingSave",
							submitBusyLabelKey: "onboardingSaving",
							onClose: finishCredential
						})
					})
				]
			});
			return apiKey
				? editor
				: renderSlot(
						"settings.models.sign-in",
						{
							complete,
							useApiKey: () => {
								setApiKey(true);
							}
						},
						{ fallback: editor }
					);
		}
		var WelcomeNotice_module_css_default = {
			actions: "t1T8VW_actions",
			copy: "t1T8VW_copy",
			error: "t1T8VW_error",
			primary: "t1T8VW_primary"
		};
		function WelcomeNotice(props) {
			const { complete, controller, useWelcome, t } = props;
			const state = useWelcome((snapshot) => snapshot);
			const finished = (0, react.useRef)(false);
			const finish = (0, react.useCallback)(() => {
				if (finished.current) return;
				finished.current = true;
				complete();
			}, [complete]);
			(0, react.useEffect)(() => {
				if (state.status === "idle") controller.load();
			}, [controller, state.status]);
			(0, react.useEffect)(() => {
				if (state.acknowledged) finish();
			}, [finish, state.acknowledged]);
			if (state.status === "idle" || state.status === "loading" || state.acknowledged) return null;
			const acknowledge = async () => {
				if (await controller.acknowledge()) finish();
			};
			const paragraphs = t("welcomeBody").split("\n\n");
			return (0, react_jsx_runtime.jsxs)(OnboardingModal, {
				title: t("welcomeTitle"),
				focusTitle: true,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						className: WelcomeNotice_module_css_default.copy,
						children: paragraphs.map((paragraph) => (0, react_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					}),
					state.error === null
						? null
						: (0, react_jsx_runtime.jsx)("p", {
								className: WelcomeNotice_module_css_default.error,
								role: "alert",
								children: t("welcomeError")
							}),
					(0, react_jsx_runtime.jsx)("div", {
						className: WelcomeNotice_module_css_default.actions,
						children: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							className: WelcomeNotice_module_css_default.primary,
							disabled: state.status === "saving",
							onClick: () => {
								acknowledge();
							},
							children: t("welcomeContinue")
						})
					})
				]
			});
		}
		const WELCOME_NOTICE_SETTINGS_NAMESPACE = "ui-settings-general";
		const WELCOME_NOTICE_ACK_FIELD = "welcomeNoticeVersion";
		const WELCOME_NOTICE_VERSION = "2026-09-28.1";
		function assertNever(_value) {
			throw new Error("unexpected welcome settings status");
		}
		var WelcomeNoticeStore = class {
			scope;
			store = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)({
				status: "idle",
				acknowledged: false,
				error: null
			});
			saving = false;
			following;
			constructor(scope) {
				this.scope = scope;
			}
			load() {
				this.following ??= this.scope.subscribe(() => {
					this.derive();
				});
				this.derive();
				return Promise.resolve();
			}
			async acknowledge() {
				this.saving = true;
				this.store.update((state) => {
					state.status = "saving";
					state.error = null;
				});
				try {
					await this.scope.set(WELCOME_NOTICE_ACK_FIELD, WELCOME_NOTICE_VERSION);
				} finally {
					this.saving = false;
				}
				this.derive();
				const { acknowledged } = this.store.getSnapshot();
				if (!acknowledged)
					this.store.update((state) => {
						state.status = "error";
						state.error = "the acknowledgement did not persist";
					});
				return acknowledged;
			}
			dispose() {
				this.following?.();
				this.following = void 0;
			}
			derive() {
				if (this.saving) return;
				const scope = this.scope.getSnapshot();
				switch (scope.status) {
					case "loading":
						this.store.update((state) => {
							state.status = "loading";
							state.error = null;
						});
						return;
					case "unavailable":
						this.store.update((state) => {
							state.status = "error";
							state.acknowledged = false;
							state.error = "welcome acknowledgement settings are unavailable";
						});
						return;
					case "ready": {
						const acknowledged = scope.value?.[WELCOME_NOTICE_ACK_FIELD] === WELCOME_NOTICE_VERSION;
						this.store.update((state) => {
							state.status = "ready";
							state.acknowledged = acknowledged;
							state.error = null;
						});
						return;
					}
					default:
						return assertNever(scope.status);
				}
			}
		};
		function createModelsOperations(ctx) {
			return {
				storeCredential: async (ref, value) => {
					const response = await ctx.remote.credentials.set(ref, value);
					return response.ok ? void 0 : response.error.message;
				},
				removeCredential: async (ref) => {
					const response = await ctx.remote.credentials.unset(ref);
					return response.ok ? void 0 : response.error.message;
				},
				writeSettings: async (ns, ops, expectedRevision) => {
					const response = await ctx.remote.settings.mutate(ns, ops, expectedRevision);
					if (response.ok) return { kind: "written", view: response.value };
					const { code, message } = response.error;
					return code === "settings/conflict" ? { kind: "conflict", message } : { kind: "refused", message };
				},
				discoverModels: async (settingsNs, request) => {
					const response = await ctx.remote.llm.discoverModels(settingsNs, request);
					return response.ok
						? { kind: "found", models: response.value }
						: { kind: "refused", message: response.error.message };
				}
			};
		}
		function createSettingsSchemaOperations(service) {
			return {
				rehydrate: (serialized) => service.rehydrate(serialized),
				validate: (schema, draft) => service.validate(schema, draft),
				nodeAtPath: (root, path) => service.nodeAtPath(root, path),
				getPath: (value, path) => service.getPath(value, path),
				hasPath: (value, path) => service.hasPath(value, path),
				setPath: (root, path, value) => service.setPath(root, path, value),
				deletePath: (root, path) => service.deletePath(root, path)
			};
		}
		const en = {
			nav: "Models",
			deepSeekAccount: "DeepSeek Account",
			title: "Models",
			intro: "Enter your API keys to use models from the following providers.",
			edit: "Edit",
			editProvider: "Edit {provider}",
			remove: "Delete",
			removeProvider: "Delete {provider}",
			deleteTitle: "Delete {provider}?",
			deleteDescription:
				"Deleting {provider} removes its configuration. Any credential it uses is managed elsewhere and will be kept.",
			deleteDescriptionWithCredential: "Deleting {provider} removes its configuration and stored API key.",
			deleteConfirm: "Delete {provider}",
			deleting: "Deleting {provider}…",
			add: "Add model provider",
			addMode: "How to add",
			addCatalog: "Third-party providers",
			addCustom: "Custom API",
			addCatalogHint:
				"Pick OpenAI, Anthropic, Kimi, or another provider from the built-in catalog and enter its API key.",
			addCustomHint:
				"Connect a relay, a self-hosted server, or any other OpenAI-, Anthropic-, or Gemini-compatible endpoint by its base URL, protocol, and models.",
			addCatalogExhausted: "Every catalog provider is already configured.",
			addCustomUnavailable: "No API protocol is available to declare.",
			provider: "Provider",
			close: "Close",
			cancel: "Cancel",
			apply: "Apply",
			applying: "Applying…",
			savedProvider: "Saved {provider}.",
			credentialConfigured: "API key configured",
			credentialMissing: "API key missing",
			accountSignedIn: "Signed in",
			readOnly: "The settings document is read-only in this deployment.",
			loadFailed: "Loading the provider directory failed",
			conflict:
				"Someone else changed these settings while this card was open. Close it and reopen to edit the current values.",
			retry: "Retry",
			keyInput: "API key",
			keyReveal: "Show secret",
			keyHide: "Hide secret",
			keyPlaceholder: "Enter your API key",
			keyPlaceholderFallback: "Leave blank to use env as auth ({hint})",
			keySaved: "Use the existing saved API key.",
			keyReplacePending: "Apply to replace the saved API key.",
			keyRemovePending: "Apply to clear the saved API key and use environment authentication.",
			keyRemovePendingEnvironment:
				"Apply to clear the saved API key. Environment authentication will be used ({hint}).",
			keyRemoveApplied: "Key cleared. Apply again to finish settings; this deletion cannot be undone.",
			keyFallbackMissing: "Env var not detected. Enter an API key, or configure {hint} in your env.",
			keyFallbackDetected: "Env var detected. ({hint})",
			keyFallbackDetectedHidden: "Env var detected.",
			keyFallbackUnchecked: "Environment credential status has not been confirmed.",
			keyHelp:
				"Saved credentials are used first. Environment fallbacks shown here, in order: {env}. Sources are launch environment, $cwd/.env, then $DSH_HOME/.env.",
			authHelp: "Authentication details",
			customized: "Customized settings",
			baseUrl: "Base URL",
			baseUrlDefault: "No default endpoint",
			baseUrlEnvironment: "Provider endpoint configuration: {env}",
			baseUrlConfigured: "Provider-configured endpoint",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (Default to use DEEPSEEK_BASE_URL)",
			deepSeekEndpointHint: "Use an API endpoint compatible with Anthropic Messages.",
			retryPolicy: "Retry policy",
			retryModeDefault: "Default ({mode})",
			retryModeNormal: "Transient errors",
			retryModeAlways: "All errors",
			retryAlwaysHint: "Failed requests retry until they succeed or the turn is stopped.",
			retryMaxRetries: "Max retries",
			retryCodes: "Error codes",
			retryCodeEmptyResponse: "Empty response",
			retryCodeRateLimit: "Rate limited",
			retryCodeServer: "Server error",
			retryCodeTimeout: "Timeout",
			retryCodeTransport: "Network error",
			retryCodeStreamClosed: "Stream closed early",
			retryCodeMalformedResponse: "Malformed response",
			retryCodeQuota: "Quota exceeded",
			retryCodeCustom: "Custom error code",
			retryCodeAdd: "Add",
			retryInitialDelay: "Initial delay (ms)",
			retryMaxDelay: "Max delay (ms)",
			retryJitter: "Jitter ratio",
			retryBackoff: "Backoff",
			retryValueNumber: "Enter a number.",
			retryValueInteger: "Enter a whole number.",
			retryValuePositive: "Must be greater than 0.",
			retryValueMin: "Must be at least {min}.",
			retryValueMax: "Must be at most {max}.",
			retryCodesInvalid: "Error codes must be non-empty text.",
			retryCodesDuplicate: "Each error code may appear once.",
			retryDelayOrder: "Initial delay cannot exceed max delay.",
			models: "Models",
			modelsInherited: "Using the adapter defaults",
			modelsCustomized: "Customized model catalog",
			resetModels: "Restore defaults",
			model: "Model",
			modelId: "Model ID",
			modelName: "Display name",
			modelNamePlaceholder: "Uses the model ID when empty",
			contextWindow: "Context window",
			contextWindowPlaceholder: "Uses the provider default",
			maxTokens: "Max output tokens",
			maxTokensPlaceholder: "Uses the provider default",
			modelAdvanced: "Model options",
			modelInputTypes: "Input types",
			modelInputText: "Text",
			modelInputImage: "Image",
			modelReasoning: "Reasoning levels",
			modelReasoningLevel: "Level",
			modelReasoningValue: "API value",
			modelReasoningHelp: "About reasoning levels",
			modelReasoningHelpText:
				"The API value is sent in the request's reasoning-effort field, such as OpenAI's reasoning_effort. It defaults to the level name; where the model provider's API documentation specifies a different value, follow it. Off turns reasoning off and needs no value; a value already written in the configuration is kept and sent.",
			modelReasoningNeedsLevel: "Add at least one level besides Off, or turn reasoning levels off.",
			modelReasoningValueRequired: "Every level besides Off needs an API value, and no value can be empty.",
			modelReasoningLevelsOnly:
				"This API protocol accepts only the minimal, low, medium, and high levels, each with its level name as the API value. Change or remove the other levels.",
			modelReasoningAdd: "Add level",
			modelReasoningRemove: "Delete level",
			modelReasoningOffValuePlaceholder: "Turns reasoning off",
			addModel: "Add model",
			removeModel: "Delete model",
			reorderModel: "Reorder model",
			reorderModelHelp: "Drag to reorder, or use the up and down arrow keys.",
			modelsEmpty: "No models will be shown in the selector. Unlisted IDs can still be sent directly.",
			keyBlank: "Enter the API key, or leave the field empty to keep the stored one.",
			keyBlankNew: "Enter the API key, or leave the field empty if this provider authenticates another way.",
			keyIllegalCharacters: "This API key is not in a valid format. Please check it.",
			modelIdRequired: "Model ID is required.",
			modelIdDuplicate: "Model ID must be unique.",
			modelNameInvalid: "Display name cannot be empty.",
			modelContextInvalid: "Context window must be a positive count, like 131072, 256K, or 1M.",
			modelMaxTokensInvalid: "Max output tokens must be a positive count, like 8192, 64K, or 1M.",
			advancedHint: "Other fields live in cordis.patch.yml; edit that section directly.",
			modelCapacityInvalid: "A capacity must be a number, optionally suffixed K or M.",
			modelDuplicate: "Each model ID may appear once.",
			fetchModels: "Fetch available models",
			fetching: "Asking the provider…",
			fetchNeedsBaseUrl: "Enter the base URL first, then fetch.",
			fetchEmpty: "The provider listed no models. Add them by hand.",
			fetchTitle: "Choose models",
			fetchDescription: "These are the models this provider has available. Checked models make up the list.",
			fetchSearch: "Search models",
			fetchNoMatches: "No matching models.",
			fetchSelectAll: "Select all",
			fetchDeselectAll: "Deselect all",
			fetchAdopt: "Update list",
			fetchKeepOne: "Keep at least one model checked.",
			customTag: "Custom",
			claudeCustomAdd: "Add Claude provider",
			claudeCustomTitle: "Claude provider",
			claudeTypeTag: "Claude provider",
			claudeAdaptiveThinking: "Adaptive thinking",
			claudeAdaptiveHelpLabel: "Adaptive thinking help",
			claudeAdaptiveHelp:
				"For Anthropic-compatible models that support adaptive thinking. When enabled, the model adjusts its thinking based on task complexity and your selected reasoning level. When disabled, it uses the thinking token limit associated with that level.",
			customRoute: "Provider ID",
			customRouteHint:
				"Lowercase identifier, starting with a letter, that uniquely names this provider in requests and as its credential name.",
			customRouteInvalid: "Start with a lowercase letter; then lowercase letters, digits, and dashes.",
			customRouteTaken: "A provider already uses this ID.",
			customDisplayName: "Display name",
			customApi: "API protocol",
			customApiUnset: "Not selected",
			protocolOpenAiCompletions: "OpenAI Chat Completions",
			protocolOpenAiResponses: "OpenAI Responses",
			protocolAnthropicMessages: "Anthropic Messages",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "A custom provider needs a base URL.",
			customBaseUrlInvalid: "Enter a valid HTTP or HTTPS URL.",
			customNeedsModels: "A custom provider needs at least one model.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "unresolvable settings path",
			create: "Create provider",
			creating: "Creating…",
			welcomeTitle: "Preview Notice",
			welcomeBody:
				"DeepSeek Harness 0.2 is still in preview, and many areas need continued improvement and refinement. We welcome feedback and suggestions from all developers and users. The new desktop app now targets a broad range of users, while developer-related advanced features can be enabled in the settings. DeepSeek Harness’s product features and plugin APIs are expected to continue rapid iteration and evolution, and will gradually stabilize over time.\n\nWe look forward to exploring the limits of intelligence together with users and developers around the world, building on open-source, reusable, and composable infrastructure. We welcome everyone to bring their ideas to life with DeepSeek Harness and participate in the community to enrich the plugin ecosystem.",
			welcomeContinue: "Continue",
			welcomeError: "The acknowledgement could not be saved. Please try again.",
			onboardingTitle: "Add an API key to get started",
			onboardingDescription: "Configure the official DeepSeek provider to start building.",
			onboardingLater: "Configure later",
			onboardingSave: "Save and continue",
			onboardingSaving: "Saving…",
			keyRequired: "Enter an API key to continue."
		};
		const zh = {
			nav: "模型",
			deepSeekAccount: "DeepSeek 账号",
			title: "模型",
			intro: "填入各提供商的 API 密钥即可使用其模型。",
			edit: "编辑",
			editProvider: "编辑 {provider}",
			remove: "删除",
			removeProvider: "删除 {provider}",
			deleteTitle: "删除 {provider}？",
			deleteDescription: "删除 {provider} 会移除其配置；其使用的凭证（如有）由其他位置管理，将会保留。",
			deleteDescriptionWithCredential: "删除 {provider} 会移除其配置和存储的 API 密钥。",
			deleteConfirm: "删除 {provider}",
			deleting: "正在删除 {provider}…",
			add: "添加模型提供商",
			addMode: "添加方式",
			addCatalog: "第三方模型提供商",
			addCustom: "自定义模型 API",
			addCatalogHint: "从内置目录中选择 OpenAI、Anthropic、Kimi 等提供商，填入其 API 密钥即可使用。",
			addCustomHint:
				"连接中转站、自部署服务或其他兼容 OpenAI / Anthropic / Gemini 协议的接口，需填写 API 地址、协议和模型。",
			addCatalogExhausted: "目录中的提供商都已添加。",
			addCustomUnavailable: "没有可用的 API 协议。",
			provider: "提供商",
			close: "关闭",
			cancel: "取消",
			apply: "保存",
			applying: "保存中…",
			savedProvider: "已保存 {provider}。",
			credentialConfigured: "API 密钥已配置",
			credentialMissing: "API 密钥缺失",
			accountSignedIn: "已登录",
			readOnly: "当前部署的设置文档为只读。",
			loadFailed: "加载提供商目录失败",
			conflict: "这张卡片打开期间，这些设置已被其他地方改动。请关闭后重新打开，在当前值上编辑。",
			retry: "重试",
			keyInput: "API 密钥",
			keyReveal: "显示密钥",
			keyHide: "隐藏密钥",
			keyPlaceholder: "输入 API 密钥",
			keyPlaceholderFallback: "留空使用环境认证（{hint}）",
			keySaved: "使用已保存的 API key。",
			keyReplacePending: "保存以替换已保存的 API key。",
			keyRemovePending: "保存以清除已保存的 API key，并改用环境认证。",
			keyRemovePendingEnvironment: "保存以清除已保存的 API key。之后使用环境认证（{hint}）。",
			keyRemoveApplied: "密钥已清除，请重试保存以完成配置更新；此删除无法撤销",
			keyFallbackMissing: "未检测到环境变量。请填写 API 密钥，或设置环境变量 {hint}。",
			keyFallbackDetected: "已检测到环境变量（{hint}）",
			keyFallbackDetectedHidden: "已检测到环境变量",
			keyFallbackUnchecked: "环境凭据状态尚未确认",
			keyHelp:
				"优先使用已保存的凭据。此处显示的环境后备按以下顺序排列：{env}。来源依次为启动环境、$cwd/.env、$DSH_HOME/.env。",
			authHelp: "认证说明",
			customized: "自定义设置",
			baseUrl: "API 地址",
			baseUrlDefault: "没有默认地址",
			baseUrlEnvironment: "提供方地址配置：{env}",
			baseUrlConfigured: "由提供方配置地址",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic（默认使用环境 DEEPSEEK_BASE_URL）",
			deepSeekEndpointHint: "请填写兼容 Anthropic Messages 协议的 API 地址。",
			retryPolicy: "重试策略",
			retryModeDefault: "默认（{mode}）",
			retryModeNormal: "仅临时错误",
			retryModeAlways: "所有错误",
			retryAlwaysHint: "失败的请求会持续重试，直到成功或本轮被停止。",
			retryMaxRetries: "最大重试次数",
			retryCodes: "错误码",
			retryCodeEmptyResponse: "空响应",
			retryCodeRateLimit: "请求限流",
			retryCodeServer: "服务器错误",
			retryCodeTimeout: "超时",
			retryCodeTransport: "网络错误",
			retryCodeStreamClosed: "流提前结束",
			retryCodeMalformedResponse: "响应格式错误",
			retryCodeQuota: "配额已用尽",
			retryCodeCustom: "自定义错误码",
			retryCodeAdd: "添加",
			retryInitialDelay: "初始延迟 (ms)",
			retryMaxDelay: "最大延迟 (ms)",
			retryJitter: "抖动比例",
			retryBackoff: "退避",
			retryValueNumber: "请输入数字。",
			retryValueInteger: "请输入整数。",
			retryValuePositive: "必须大于 0。",
			retryValueMin: "不能小于 {min}。",
			retryValueMax: "不能大于 {max}。",
			retryCodesInvalid: "错误码必须是非空文本。",
			retryCodesDuplicate: "每个错误码只能出现一次。",
			retryDelayOrder: "初始延迟不能大于最大延迟。",
			models: "模型目录",
			modelsInherited: "正在使用适配器默认模型",
			modelsCustomized: "已自定义模型目录",
			resetModels: "恢复默认模型",
			model: "模型",
			modelId: "模型 ID",
			modelName: "显示名称",
			modelNamePlaceholder: "留空时使用模型 ID",
			contextWindow: "上下文窗口",
			contextWindowPlaceholder: "使用提供商默认值",
			maxTokens: "最大输出 token 数",
			maxTokensPlaceholder: "使用提供商默认值",
			modelAdvanced: "模型选项",
			modelInputTypes: "输入类型",
			modelInputText: "文本",
			modelInputImage: "图片",
			modelReasoning: "推理等级",
			modelReasoningLevel: "档位",
			modelReasoningValue: "API 参数值",
			modelReasoningHelp: "推理等级说明",
			modelReasoningHelpText:
				"API 参数值会写入请求的推理强度字段（如 OpenAI 的 reasoning_effort），默认与档位名相同；如有不同，以模型提供商的 API 文档为准。Off 表示关闭思考，不需要填写参数值；配置中已写入的值会保留并发送。",
			modelReasoningNeedsLevel: "至少添加一个 Off 以外的档位；不需要思考请关闭推理等级。",
			modelReasoningValueRequired: "Off 以外的档位都需要填写 API 参数值，且参数值不能为空字符串。",
			modelReasoningLevelsOnly:
				"此 API 协议仅接受 minimal、low、medium 和 high 档位，且每个档位的 API 参数值须与档位名称相同。请修改或删除其他档位。",
			modelReasoningAdd: "添加档位",
			modelReasoningRemove: "删除档位",
			modelReasoningOffValuePlaceholder: "关闭思考",
			addModel: "添加模型",
			removeModel: "删除模型",
			reorderModel: "调整模型顺序",
			reorderModelHelp: "拖动排序，或使用上下方向键调整顺序。",
			modelsEmpty: "模型选择器中将不显示任何模型；目录外 ID 仍可直接发送。",
			keyBlank: "请输入 API 密钥；留空则保持已存储的密钥。",
			keyBlankNew: "请输入 API 密钥；若该提供商以其他方式鉴权，可以留空。",
			keyIllegalCharacters: "该 API 密钥格式错误，请检查。",
			modelIdRequired: "模型 ID 不能为空。",
			modelIdDuplicate: "模型 ID 不能重复。",
			modelNameInvalid: "显示名称不能为空。",
			modelContextInvalid: "上下文窗口必须是正数，例如 131072、256K 或 1M。",
			modelMaxTokensInvalid: "最大输出 token 数必须是正数，例如 8192、64K 或 1M。",
			advancedHint: "其余字段在 cordis.patch.yml 中，请直接编辑对应段。",
			modelCapacityInvalid: "容量需为数字，可加 K 或 M 后缀。",
			modelDuplicate: "每个模型 ID 只能出现一次。",
			fetchModels: "获取可用模型",
			fetching: "正在询问提供商…",
			fetchNeedsBaseUrl: "请先填写 API 地址，再获取。",
			fetchEmpty: "该提供商没有列出任何模型，请手动添加。",
			fetchTitle: "选择模型",
			fetchDescription: "以下是模型提供商的可用模型，勾选的模型即为模型列表。",
			fetchSearch: "搜索模型",
			fetchNoMatches: "没有匹配的模型。",
			fetchSelectAll: "全选",
			fetchDeselectAll: "取消全选",
			fetchAdopt: "更新列表",
			fetchKeepOne: "请至少保留一个勾选的模型。",
			customTag: "自定义",
			claudeCustomAdd: "添加 Claude 提供方",
			claudeCustomTitle: "Claude 提供方",
			claudeTypeTag: "Claude 提供方",
			claudeAdaptiveThinking: "自适应思考",
			claudeAdaptiveHelpLabel: "自适应思考说明",
			claudeAdaptiveHelp:
				"适用于支持自适应思考的 Anthropic 兼容模型。开启后，模型根据任务难度和你选择的推理等级自动调整思考量；关闭后，改用该等级对应的思考 token 数量上限。",
			customRoute: "Provider ID",
			customRouteHint: "以小写字母开头的标识，在请求中唯一标识该提供商，并用于派生凭据名。",
			customRouteInvalid: "需以小写字母开头，之后可用小写字母、数字和短横线。",
			customRouteTaken: "已有提供商使用了这个 ID。",
			customDisplayName: "显示名称",
			customApi: "API 协议",
			customApiUnset: "未选择",
			protocolOpenAiCompletions: "OpenAI Chat Completions",
			protocolOpenAiResponses: "OpenAI Responses",
			protocolAnthropicMessages: "Anthropic Messages",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "自定义模型 API 需要填写 API 地址。",
			customBaseUrlInvalid: "请输入有效的 HTTP 或 HTTPS 地址。",
			customNeedsModels: "自定义模型 API 至少需要一个模型。",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "无法解析设置路径",
			create: "创建提供商",
			creating: "创建中…",
			welcomeTitle: "预览版说明",
			welcomeBody:
				"DeepSeek Harness 目前的 0.2 版本仍处于预览阶段，还有许多地方需要持续改进和打磨，希望听取广大开发者和用户的反馈建议。现在，新的桌面端面向广泛用户，开发者相关的进阶功能可在配置中开启使用。预计 DeepSeek Harness 的产品功能以及插件 API 都会继续快速迭代、持续演化，并逐渐趋于稳定。\n\n我们期待与全球用户和开发者一起，在开源、可复用、可组合的基础设施之上，共同探索智能上限。欢迎大家用 DeepSeek Harness 将想法变成现实，与社区一起丰富插件生态。",
			welcomeContinue: "继续",
			welcomeError: "暂时无法保存确认状态，请重试。",
			onboardingTitle: "添加一个 API Key 开始使用",
			onboardingDescription: "配置 DeepSeek 官方模型，即可开始使用。",
			onboardingLater: "稍后配置",
			onboardingSave: "保存并继续",
			onboardingSaving: "保存中…",
			keyRequired: "请输入 API 密钥后继续。"
		};
		const ja = {
			nav: "モデル",
			deepSeekAccount: "DeepSeekアカウント",
			title: "モデル",
			intro: "以下のプロバイダーのモデルを使用するには、APIキーを入力してください。",
			edit: "編集",
			editProvider: "{provider}を編集",
			remove: "削除",
			removeProvider: "{provider}を削除",
			deleteTitle: "{provider}を削除しますか？",
			deleteDescription:
				"{provider}を削除すると、その設定が削除されます。使用している認証情報は別の場所で管理されているため、保持されます。",
			deleteDescriptionWithCredential: "{provider}を削除すると、その設定と保存済みのAPIキーが削除されます。",
			deleteConfirm: "{provider}を削除",
			deleting: "{provider}を削除中…",
			add: "モデルプロバイダーを追加",
			addMode: "追加方法",
			addCatalog: "サードパーティのモデルプロバイダー",
			addCustom: "カスタムモデルAPI",
			addCatalogHint:
				"組み込みカタログからOpenAI、Anthropic、Kimiなどのプロバイダーを選択し、APIキーを入力してください。",
			addCustomHint:
				"ベースURL、プロトコル、モデルを指定して、リレー、セルフホストサーバー、その他のOpenAI/Anthropic/Gemini互換エンドポイントに接続します。",
			addCatalogExhausted: "カタログ内のすべてのプロバイダーが設定済みです。",
			addCustomUnavailable: "宣言できるAPIプロトコルがありません。",
			provider: "プロバイダー",
			close: "閉じる",
			cancel: "キャンセル",
			apply: "適用",
			applying: "適用中…",
			savedProvider: "{provider}を保存しました。",
			credentialConfigured: "APIキー設定済み",
			credentialMissing: "APIキー未設定",
			accountSignedIn: "ログイン済み",
			readOnly: "このデプロイでは設定ドキュメントは読み取り専用です。",
			loadFailed: "プロバイダーディレクトリの読み込みに失敗しました",
			conflict:
				"このカードを開いている間に、他のユーザーが設定を変更しました。閉じて開き直し、最新の値で編集してください。",
			retry: "再試行",
			keyInput: "APIキー",
			keyReveal: "シークレットを表示",
			keyHide: "シークレットを非表示",
			keyPlaceholder: "APIキーを入力",
			keyPlaceholderFallback: "空欄のままにすると環境変数を認証に使用します ({hint})",
			keySaved: "保存済みのAPIキーを使用します。",
			keyReplacePending: "適用すると保存済みのAPIキーを置き換えます。",
			keyRemovePending: "適用すると保存済みのAPIキーを削除し、環境変数の認証を使用します。",
			keyRemovePendingEnvironment:
				"適用すると保存済みのAPIキーを削除します。その後、環境変数の認証（{hint}）を使用します。",
			keyRemoveApplied: "キーは削除済みです。再度適用して設定を更新してください。削除は取り消せません。",
			keyFallbackMissing: "環境変数が検出されません。APIキーを入力するか、環境変数に{hint}を設定してください。",
			keyFallbackDetected: "環境変数を検出しました。({hint})",
			keyFallbackDetectedHidden: "環境変数を検出しました。",
			keyFallbackUnchecked: "環境変数の認証情報の状態は確認されていません。",
			keyHelp:
				"保存済みの認証情報が優先されます。以下に示す環境変数のフォールバック（この順）: {env}。参照元は起動環境、$cwd/.env、$DSH_HOME/.envの順です。",
			authHelp: "認証の詳細",
			customized: "カスタマイズされた設定",
			baseUrl: "ベースURL",
			baseUrlDefault: "デフォルトエンドポイントなし",
			baseUrlEnvironment: "プロバイダーのエンドポイント設定: {env}",
			baseUrlConfigured: "プロバイダー設定のエンドポイント",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (デフォルトはDEEPSEEK_BASE_URLを使用)",
			deepSeekEndpointHint: "Anthropic Messagesと互換性のあるAPIエンドポイントを使用してください。",
			retryPolicy: "再試行ポリシー",
			retryModeDefault: "デフォルト ({mode})",
			retryModeNormal: "一時的なエラーのみ",
			retryModeAlways: "すべてのエラー",
			retryAlwaysHint: "失敗したリクエストは、成功するかターンが停止されるまで再試行されます。",
			retryMaxRetries: "最大再試行回数",
			retryCodes: "エラーコード",
			retryCodeEmptyResponse: "空のレスポンス",
			retryCodeRateLimit: "レート制限",
			retryCodeServer: "サーバーエラー",
			retryCodeTimeout: "タイムアウト",
			retryCodeTransport: "ネットワークエラー",
			retryCodeStreamClosed: "ストリームの途中終了",
			retryCodeMalformedResponse: "不正なレスポンス",
			retryCodeQuota: "クォータ超過",
			retryCodeCustom: "カスタムエラーコード",
			retryCodeAdd: "追加",
			retryInitialDelay: "初期遅延 (ms)",
			retryMaxDelay: "最大遅延 (ms)",
			retryJitter: "ジッター比率",
			retryBackoff: "バックオフ",
			retryValueNumber: "数値を入力してください。",
			retryValueInteger: "整数を入力してください。",
			retryValuePositive: "0 より大きい値にしてください。",
			retryValueMin: "{min} 以上にしてください。",
			retryValueMax: "{max} 以下にしてください。",
			retryCodesInvalid: "エラーコードは空でないテキストにしてください。",
			retryCodesDuplicate: "各エラーコードは1回のみ指定できます。",
			retryDelayOrder: "初期遅延は最大遅延以下にしてください。",
			models: "モデル",
			modelsInherited: "アダプターのデフォルトを使用",
			modelsCustomized: "カスタマイズされたモデルカタログ",
			resetModels: "デフォルトに戻す",
			model: "モデル",
			modelId: "モデルID",
			modelName: "表示名",
			modelNamePlaceholder: "空欄の場合はモデルIDを使用",
			contextWindow: "コンテキストウィンドウ",
			contextWindowPlaceholder: "プロバイダーのデフォルトを使用",
			maxTokens: "最大出力トークン数",
			maxTokensPlaceholder: "プロバイダーのデフォルトを使用",
			modelAdvanced: "モデルオプション",
			modelInputTypes: "入力タイプ",
			modelInputText: "テキスト",
			modelInputImage: "画像",
			modelReasoning: "推論レベル",
			modelReasoningLevel: "レベル",
			modelReasoningValue: "API値",
			modelReasoningHelp: "推論レベルについて",
			modelReasoningHelpText:
				"API値はリクエストの推論強度フィールド（OpenAIのreasoning_effortなど）で送信されます。デフォルトはレベル名です。モデルプロバイダーのAPIドキュメントで別の値が指定されている場合はそれに従ってください。オフは推論を無効にするため値は不要です。設定に既に記述されている値は保持され、送信されます。",
			modelReasoningNeedsLevel: "オフ以外のレベルを少なくとも1つ追加するか、推論レベルを無効にしてください。",
			modelReasoningValueRequired: "オフ以外の各レベルにはAPI値が必要で、空の値は使用できません。",
			modelReasoningLevelsOnly:
				"この API プロトコルで使用できるレベルは minimal、low、medium、high のみで、各レベルの API 値はレベル名と同じである必要があります。その他のレベルを変更または削除してください。",
			modelReasoningAdd: "レベルを追加",
			modelReasoningRemove: "レベルを削除",
			modelReasoningOffValuePlaceholder: "推論を無効にします",
			addModel: "モデルを追加",
			removeModel: "モデルを削除",
			reorderModel: "モデルの順序を変更",
			reorderModelHelp: "ドラッグ、または上下の矢印キーで順序を変更できます。",
			modelsEmpty: "セレクターにモデルが表示されません。一覧にないIDも直接送信できます。",
			keyBlank: "APIキーを入力してください。空欄のままにすると保存済みのキーが保持されます。",
			keyBlankNew: "APIキーを入力してください。このプロバイダーが別の方法で認証する場合は空欄のままにしてください。",
			keyIllegalCharacters: "このAPIキーは有効な形式ではありません。確認してください。",
			modelIdRequired: "モデルIDは必須です。",
			modelIdDuplicate: "モデルIDは一意である必要があります。",
			modelNameInvalid: "表示名は空にできません。",
			modelContextInvalid: "コンテキストウィンドウは正の数値（131072、256K、1Mなど）で指定してください。",
			modelMaxTokensInvalid: "最大出力トークン数は正の数値（8192、64K、1Mなど）で指定してください。",
			advancedHint: "その他のフィールドはcordis.patch.ymlにあります。そのセクションを直接編集してください。",
			modelCapacityInvalid: "容量は数値で指定し、末尾にKまたはMを付けられます。",
			modelDuplicate: "各モデルIDは1回のみ指定できます。",
			fetchModels: "利用可能なモデルを取得",
			fetching: "プロバイダーに問い合わせ中…",
			fetchNeedsBaseUrl: "先にベースURLを入力してから取得してください。",
			fetchEmpty: "プロバイダーはモデルを一覧表示しませんでした。手動で追加してください。",
			fetchTitle: "モデルを選択",
			fetchDescription: "このプロバイダーで利用可能なモデルです。チェックしたモデルが一覧になります。",
			fetchSearch: "モデルを検索",
			fetchNoMatches: "一致するモデルがありません。",
			fetchSelectAll: "すべて選択",
			fetchDeselectAll: "すべて解除",
			fetchAdopt: "一覧を更新",
			fetchKeepOne: "少なくとも1つのモデルをチェックしたままにしてください。",
			customTag: "カスタム",
			customRoute: "プロバイダーID",
			customRouteHint:
				"リクエスト時および認証情報名としてこのプロバイダーを一意に識別する、小文字で始まる小文字の識別子です。",
			customRouteInvalid: "小文字で始め、その後は小文字・数字・ハイフンを使用してください。",
			customRouteTaken: "このIDは既に別のプロバイダーで使用されています。",
			customDisplayName: "表示名",
			customApi: "APIプロトコル",
			customApiUnset: "未選択",
			protocolOpenAiCompletions: "OpenAI Chat Completions",
			protocolOpenAiResponses: "OpenAI Responses",
			protocolAnthropicMessages: "Anthropic Messages",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "カスタムプロバイダーにはベースURLが必要です。",
			customBaseUrlInvalid: "有効なHTTPまたはHTTPSのURLを入力してください。",
			customNeedsModels: "カスタムプロバイダーには少なくとも1つのモデルが必要です。",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "解決できない設定パス",
			create: "プロバイダーを作成",
			creating: "作成中…",
			welcomeTitle: "プレビューに関するお知らせ",
			welcomeBody:
				"DeepSeek Harness 0.2はまだプレビュー版であり、多くの領域で継続的な改善と洗練が必要です。開発者とユーザーの皆さまからのフィードバックとご提案を歓迎します。新しいデスクトップアプリは幅広いユーザーを対象としていますが、開発者向けの高度な機能は設定で有効にできます。DeepSeek Harnessの製品機能とプラグインAPIは今後も急速な反復と進化を続け、徐々に安定していく見込みです。\n\nオープンソースで再利用可能かつ組み合わせ可能なインフラストラクチャを基盤に、世界中のユーザーと開発者と共に知能の限界を探求していくことを楽しみにしています。皆さまがDeepSeek Harnessでアイデアを形にし、コミュニティに参加してプラグインエコシステムを豊かにしてくださることを歓迎します。",
			welcomeContinue: "続ける",
			welcomeError: "確認を保存できませんでした。もう一度お試しください。",
			onboardingTitle: "APIキーを追加して始める",
			onboardingDescription: "公式のDeepSeekプロバイダーを設定して開発を始めましょう。",
			onboardingLater: "後で設定",
			onboardingSave: "保存して続ける",
			onboardingSaving: "保存中…",
			keyRequired: "続けるにはAPIキーを入力してください。"
		};
		const es = {
			nav: "Modelos",
			deepSeekAccount: "Cuenta DeepSeek",
			title: "Modelos",
			intro: "Ingrese sus claves API para usar modelos de los siguientes proveedores.",
			edit: "Editar",
			editProvider: "Editar {provider}",
			remove: "Eliminar",
			removeProvider: "Eliminar {provider}",
			deleteTitle: "¿Eliminar {provider}?",
			deleteDescription:
				"Al eliminar {provider} se elimina su configuración. Cualquier credencial que utilice se administra en otro lugar y se conservará.",
			deleteDescriptionWithCredential: "Al eliminar {provider} se elimina su configuración y la clave API almacenada.",
			deleteConfirm: "Eliminar {provider}",
			deleting: "Eliminando {provider}…",
			add: "Agregar proveedor de modelo",
			addMode: "como agregar",
			addCatalog: "Proveedor de modelos externo",
			addCustom: "Modelo personalizado API",
			addCatalogHint: "Elija OpenAI, Anthropic, Kimi u otro proveedor del catálogo integrado e ingrese su clave API.",
			addCustomHint:
				"Conecte un repetidor, un servidor autohospedado o cualquier otro punto final compatible con OpenAI, Anthropic o Gemini mediante su URL base, protocolo y modelos.",
			addCatalogExhausted: "Cada proveedor de catálogo ya está configurado.",
			addCustomUnavailable: "No hay ningún protocolo API disponible para declarar.",
			provider: "Proveedor",
			close: "Cerrar",
			cancel: "Cancelar",
			apply: "Aplicar",
			applying: "Aplicando…",
			savedProvider: "Guardado {provider}.",
			credentialConfigured: "Clave API configurada",
			credentialMissing: "Falta la clave API",
			accountSignedIn: "Iniciado sesión",
			readOnly: "El documento de configuración es de solo lectura en esta implementación.",
			loadFailed: "Error al cargar el directorio de proveedores",
			conflict:
				"Alguien más cambió esta configuración mientras esta tarjeta estaba abierta. Ciérrelo y vuelva a abrirlo para editar los valores actuales.",
			retry: "Reintentar",
			keyInput: "Clave de API",
			keyReveal: "Mostrar secreto",
			keyHide: "Ocultar secreto",
			keyPlaceholder: "Ingrese su clave API",
			keyPlaceholderFallback: "Déjelo en blanco para usar env como autenticación ({hint})",
			keySaved: "Se usará la clave API guardada.",
			keyReplacePending: "Aplique para reemplazar la clave API guardada.",
			keyRemovePending: "Aplique para borrar la clave API guardada y usar la autenticación del entorno.",
			keyRemovePendingEnvironment:
				"Aplique para borrar la clave API guardada. Se usará la autenticación del entorno ({hint}).",
			keyRemoveApplied: "Clave borrada. Aplique de nuevo para completar la configuración; no se puede deshacer.",
			keyFallbackMissing:
				"No se detectó la variable de entorno. Ingrese una clave API o configure {hint} en su entorno.",
			keyFallbackDetected: "Se detectó var env. ({hint})",
			keyFallbackDetectedHidden: "Se detectó var env.",
			keyFallbackUnchecked: "El estado de la credencial ambiental no ha sido confirmado.",
			keyHelp:
				"Las credenciales guardadas se utilizan primero. Las alternativas de entorno se muestran aquí, en orden: {env}. Las fuentes son el entorno de inicio, $cwd/.env, luego $DSH_HOME/.env.",
			authHelp: "Detalles de autenticación",
			customized: "Configuraciones personalizadas",
			baseUrl: "URL base",
			baseUrlDefault: "Sin punto final predeterminado",
			baseUrlEnvironment: "Configuración del punto final del proveedor: {env}",
			baseUrlConfigured: "Punto final configurado por el proveedor",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (Uso predeterminado DEEPSEEK_BASE_URL)",
			deepSeekEndpointHint: "Utilice un punto final API compatible con Anthropic Messages.",
			retryPolicy: "Política de reintentos",
			retryModeDefault: "Predeterminado ({mode})",
			retryModeNormal: "Errores transitorios",
			retryModeAlways: "Todos los errores",
			retryAlwaysHint: "Las solicitudes fallidas se reintentan hasta que tienen éxito o se detiene el turno.",
			retryMaxRetries: "Reintentos máximos",
			retryCodes: "Códigos de error",
			retryCodeEmptyResponse: "Respuesta vacía",
			retryCodeRateLimit: "Límite de frecuencia",
			retryCodeServer: "Error del servidor",
			retryCodeTimeout: "Tiempo agotado",
			retryCodeTransport: "Error de red",
			retryCodeStreamClosed: "Flujo cerrado antes de tiempo",
			retryCodeMalformedResponse: "Respuesta mal formada",
			retryCodeQuota: "Cuota agotada",
			retryCodeCustom: "Código de error personalizado",
			retryCodeAdd: "Añadir",
			retryInitialDelay: "Retraso inicial (ms)",
			retryMaxDelay: "Retraso máximo (ms)",
			retryJitter: "Proporción de jitter",
			retryBackoff: "Retroceso",
			retryValueNumber: "Ingrese un número.",
			retryValueInteger: "Ingrese un número entero.",
			retryValuePositive: "Debe ser mayor que 0.",
			retryValueMin: "Debe ser al menos {min}.",
			retryValueMax: "Debe ser como máximo {max}.",
			retryCodesInvalid: "Los códigos de error deben ser texto no vacío.",
			retryCodesDuplicate: "Cada código de error solo puede aparecer una vez.",
			retryDelayOrder: "El retraso inicial no puede superar el retraso máximo.",
			models: "Modelos",
			modelsInherited: "Usando los valores predeterminados del adaptador",
			modelsCustomized: "Catálogo de modelos personalizado",
			resetModels: "Restaurar valores predeterminados",
			model: "modelo",
			modelId: "ID del modelo",
			modelName: "Nombre para mostrar",
			modelNamePlaceholder: "Utiliza el ID del modelo cuando está vacío",
			contextWindow: "ventana contextual",
			contextWindowPlaceholder: "Utiliza el proveedor predeterminado",
			maxTokens: "Fichas de salida máxima",
			maxTokensPlaceholder: "Utiliza el proveedor predeterminado",
			modelAdvanced: "Opciones de modelo",
			modelInputTypes: "Tipos de entrada",
			modelInputText: "Texto",
			modelInputImage: "Imagen",
			modelReasoning: "Niveles de razonamiento",
			modelReasoningLevel: "Nivel",
			modelReasoningValue: "Valor API",
			modelReasoningHelp: "Acerca de los niveles de razonamiento",
			modelReasoningHelpText:
				"El valor de la API se envía en el campo de esfuerzo de razonamiento de la solicitud, como reasoning_effort de OpenAI. De forma predeterminada se usa el nombre del nivel; si la documentación de la API del proveedor del modelo especifica otro valor, úselo. Desactivado deshabilita el razonamiento y no necesita un valor; cualquier valor ya guardado en la configuración se conserva y se envía.",
			modelReasoningNeedsLevel:
				"Agregue al menos un nivel además de Desactivado o desactive los niveles de razonamiento.",
			modelReasoningValueRequired: "Cada nivel además de Off necesita un valor API y ningún valor puede estar vacío.",
			modelReasoningLevelsOnly:
				"Este protocolo de API solo acepta los niveles minimal, low, medium y high, cada uno con su nombre de nivel como valor de API. Cambie o elimine los demás niveles.",
			modelReasoningAdd: "Agregar nivel",
			modelReasoningRemove: "Eliminar nivel",
			modelReasoningOffValuePlaceholder: "Desactiva el razonamiento",
			addModel: "Agregar modelo",
			removeModel: "Eliminar modelo",
			reorderModel: "Reordenar modelo",
			reorderModelHelp: "Arrastre para reordenar o use las teclas de flecha hacia arriba y hacia abajo.",
			modelsEmpty:
				"No se mostrará ningún modelo en el selector. Las identificaciones que no figuran en la lista aún se pueden enviar directamente.",
			keyBlank: "Ingrese la clave API, o deje el campo vacío para conservar la almacenada.",
			keyBlankNew: "Ingrese la clave API o deje el campo vacío si este proveedor se autentica de otra manera.",
			keyIllegalCharacters: "Esta clave API no tiene un formato válido. Por favor compruébalo.",
			modelIdRequired: "Se requiere identificación del modelo.",
			modelIdDuplicate: "El ID del modelo debe ser único.",
			modelNameInvalid: "El nombre para mostrar no puede estar vacío.",
			modelContextInvalid: "La ventana de contexto debe tener un recuento positivo, como 131072, 256K o 1M.",
			modelMaxTokensInvalid: "Los tokens de salida máxima deben tener un recuento positivo, como 8192, 64K o 1M.",
			advancedHint: "Otros campos se encuentran en cordis.patch.yml; edite esa sección directamente.",
			modelCapacityInvalid: "Una capacidad debe ser un número, opcionalmente con el sufijo K o M.",
			modelDuplicate: "Cada ID de modelo puede aparecer una vez.",
			fetchModels: "Buscar modelos disponibles",
			fetching: "Preguntando al proveedor...",
			fetchNeedsBaseUrl: "Ingrese primero la URL base y luego busque.",
			fetchEmpty: "El proveedor no enumeró ningún modelo. Agréguelos a mano.",
			fetchTitle: "Elige modelos",
			fetchDescription:
				"Estos son los modelos que tiene disponibles este proveedor. Los modelos comprobados componen la lista.",
			fetchSearch: "Buscar modelos",
			fetchNoMatches: "No hay modelos coincidentes.",
			fetchSelectAll: "Seleccionar todo",
			fetchDeselectAll: "Deseleccionar todo",
			fetchAdopt: "Lista de actualización",
			fetchKeepOne: "Mantenga al menos un modelo controlado.",
			customTag: "personalizado",
			customRoute: "ID del proveedor",
			customRouteHint:
				"Identificador en minúscula, que comienza con una letra, que nombra de forma exclusiva a este proveedor en las solicitudes y como su nombre de credencial.",
			customRouteInvalid: "Comience con una letra minúscula; luego letras minúsculas, dígitos y guiones.",
			customRouteTaken: "Un proveedor ya utiliza esta identificación.",
			customDisplayName: "Nombre para mostrar",
			customApi: "Protocolo API",
			customApiUnset: "No seleccionado",
			protocolOpenAiCompletions: "Finalizaciones del chat OpenAI",
			protocolOpenAiResponses: "Respuestas de OpenAI",
			protocolAnthropicMessages: "Mensajes antrópicos",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "Un proveedor personalizado necesita una URL base.",
			customBaseUrlInvalid: "Ingrese una URL HTTP o HTTPS válida.",
			customNeedsModels: "Un proveedor personalizado necesita al menos un modelo.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "ruta de configuración irresoluble",
			create: "Crear proveedor",
			creating: "Creando…",
			welcomeTitle: "Aviso previo",
			welcomeBody:
				"DeepSeek Harness 0.2 aún está en versión preliminar y muchas áreas necesitan mejoras y refinamientos continuos. Agradecemos los comentarios y sugerencias de todos los desarrolladores y usuarios. La nueva aplicación de escritorio ahora está dirigida a una amplia gama de usuarios, mientras que las funciones avanzadas relacionadas con los desarrolladores se pueden habilitar en la configuración. Se espera que las características del producto y las API de complementos de DeepSeek Harness continúen con una rápida iteración y evolución, y se estabilicen gradualmente con el tiempo.\n\nEsperamos explorar los límites de la inteligencia junto con usuarios y desarrolladores de todo el mundo, basándose en una infraestructura de código abierto, reutilizable y componible. Invitamos a todos a dar vida a sus ideas con DeepSeek Harness y participar en la comunidad para enriquecer el ecosistema de complementos.",
			welcomeContinue: "Continuar",
			welcomeError: "El reconocimiento no se pudo guardar. Por favor inténtalo de nuevo.",
			onboardingTitle: "Agregue una clave API para comenzar",
			onboardingDescription: "Configure el proveedor oficial DeepSeek para comenzar a construir.",
			onboardingLater: "Configurar más tarde",
			onboardingSave: "Guardar y continuar",
			onboardingSaving: "Guardando…",
			keyRequired: "Ingrese una clave API para continuar."
		};
		const fr = {
			nav: "Modèles",
			deepSeekAccount: "Compte DeepSeek",
			title: "Modèles",
			intro: "Entrez vos clés API pour utiliser les modèles des fournisseurs suivants.",
			edit: "Modifier",
			editProvider: "Modifier {provider}",
			remove: "Supprimer",
			removeProvider: "Supprimer {provider}",
			deleteTitle: "Supprimer {provider} ?",
			deleteDescription:
				"La suppression de {provider} supprime sa configuration. Tout identifiant qu'il utilise est géré ailleurs et sera conservé.",
			deleteDescriptionWithCredential: "La suppression de {provider} supprime sa configuration et la clé API stockée.",
			deleteConfirm: "Supprimer {provider}",
			deleting: "Suppression de {provider}…",
			add: "Ajouter un fournisseur de modèles",
			addMode: "Comment ajouter",
			addCatalog: "Fournisseur de modèles tiers",
			addCustom: "Modèle personnalisé API",
			addCatalogHint:
				"Choisissez OpenAI, Anthropic, Kimi ou un autre fournisseur dans le catalogue intégré et entrez sa clé API.",
			addCustomHint:
				"Connectez un relais, un serveur auto-hébergé ou tout autre point de terminaison compatible OpenAI, Anthropic ou Gemini par son URL de base, son protocole et ses modèles.",
			addCatalogExhausted: "Chaque fournisseur de catalogue est déjà configuré.",
			addCustomUnavailable: "Aucun protocole API n'est disponible à déclarer.",
			provider: "Fournisseur",
			close: "Fermer",
			cancel: "Annuler",
			apply: "Appliquer",
			applying: "Application…",
			savedProvider: "{provider} enregistré.",
			credentialConfigured: "Clé API configurée",
			credentialMissing: "Clé API manquante",
			accountSignedIn: "Connecté",
			readOnly: "Le document de paramètres est en lecture seule dans ce déploiement.",
			loadFailed: "Le chargement du répertoire du fournisseur a échoué",
			conflict:
				"Quelqu'un d'autre a modifié ces paramètres alors que cette carte était ouverte. Fermez-le et rouvrez-le pour modifier les valeurs actuelles.",
			retry: "Réessayer",
			keyInput: "Clé API",
			keyReveal: "Afficher le secret",
			keyHide: "Cacher le secret",
			keyPlaceholder: "Entrez votre clé API",
			keyPlaceholderFallback: "Laissez vide pour utiliser env comme authentification ({hint})",
			keySaved: "La clé API enregistrée sera utilisée.",
			keyReplacePending: "Appliquez pour remplacer la clé API enregistrée.",
			keyRemovePending:
				"Appliquez pour effacer la clé API enregistrée et utiliser l’authentification de l’environnement.",
			keyRemovePendingEnvironment:
				"Appliquez pour effacer la clé API enregistrée. L’authentification de l’environnement sera utilisée ({hint}).",
			keyRemoveApplied:
				"Clé supprimée. Appliquez à nouveau pour terminer les paramètres ; la suppression est irréversible.",
			keyFallbackMissing:
				"Var d'environnement non détectée. Entrez une clé API ou configurez {hint} dans votre environnement.",
			keyFallbackDetected: "Var d'environnement détectée. ({hint})",
			keyFallbackDetectedHidden: "Var d'environnement détectée.",
			keyFallbackUnchecked: "Le statut des qualifications en environnement n’a pas été confirmé.",
			keyHelp:
				"Les informations d'identification enregistrées sont utilisées en premier. Solutions de secours d’environnement affichées ici, dans l’ordre : {env}. Les sources sont l'environnement de lancement, $cwd/.env, puis $DSH_HOME/.env.",
			authHelp: "Détails d'authentification",
			customized: "Paramètres personnalisés",
			baseUrl: "URL de base",
			baseUrlDefault: "Aucun point de terminaison par défaut",
			baseUrlEnvironment: "Configuration du point de terminaison du fournisseur : {env}",
			baseUrlConfigured: "Point de terminaison configuré par le fournisseur",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (par défaut, DEEPSEEK_BASE_URL est utilisé)",
			deepSeekEndpointHint: "Utilisez un point de terminaison API compatible avec Anthropic Messages.",
			retryPolicy: "Politique de nouvelle tentative",
			retryModeDefault: "Par défaut ({mode})",
			retryModeNormal: "Erreurs temporaires",
			retryModeAlways: "Toutes les erreurs",
			retryAlwaysHint:
				"Les requêtes en échec sont réessayées jusqu'à ce qu'elles réussissent ou que le tour soit arrêté.",
			retryMaxRetries: "Tentatives max.",
			retryCodes: "Codes d'erreur",
			retryCodeEmptyResponse: "Réponse vide",
			retryCodeRateLimit: "Limite de débit",
			retryCodeServer: "Erreur serveur",
			retryCodeTimeout: "Délai dépassé",
			retryCodeTransport: "Erreur réseau",
			retryCodeStreamClosed: "Flux interrompu",
			retryCodeMalformedResponse: "Réponse mal formée",
			retryCodeQuota: "Quota dépassé",
			retryCodeCustom: "Code d'erreur personnalisé",
			retryCodeAdd: "Ajouter",
			retryInitialDelay: "Délai initial (ms)",
			retryMaxDelay: "Délai maximum (ms)",
			retryJitter: "Ratio de gigue",
			retryBackoff: "Temporisation",
			retryValueNumber: "Saisissez un nombre.",
			retryValueInteger: "Saisissez un nombre entier.",
			retryValuePositive: "Doit être supérieur à 0.",
			retryValueMin: "Doit être supérieur ou égal à {min}.",
			retryValueMax: "Doit être inférieur ou égal à {max}.",
			retryCodesInvalid: "Les codes d'erreur doivent être du texte non vide.",
			retryCodesDuplicate: "Chaque code d'erreur ne peut apparaître qu'une fois.",
			retryDelayOrder: "Le délai initial ne peut pas dépasser le délai maximum.",
			models: "Modèles",
			modelsInherited: "Utilisation des valeurs par défaut de l'adaptateur",
			modelsCustomized: "Catalogue de modèles personnalisés",
			resetModels: "Restaurer les valeurs par défaut",
			model: "Modèle",
			modelId: "ID du modèle",
			modelName: "Nom d'affichage",
			modelNamePlaceholder: "Utilise l'ID du modèle lorsqu'il est vide",
			contextWindow: "Fenêtre contextuelle",
			contextWindowPlaceholder: "Utilise la valeur par défaut du fournisseur",
			maxTokens: "Jetons de sortie maximum",
			maxTokensPlaceholder: "Utilise la valeur par défaut du fournisseur",
			modelAdvanced: "Options de modèle",
			modelInputTypes: "Types d'entrée",
			modelInputText: "Texte",
			modelInputImage: "Images",
			modelReasoning: "Niveaux de raisonnement",
			modelReasoningLevel: "Niveau",
			modelReasoningValue: "Valeur API",
			modelReasoningHelp: "À propos des niveaux de raisonnement",
			modelReasoningHelpText:
				"La valeur API est envoyée dans le champ d’effort de raisonnement de la requête, comme reasoning_effort chez OpenAI. Par défaut, elle correspond au nom du niveau ; si la documentation API du fournisseur du modèle indique une autre valeur, utilisez-la. Désactivé coupe le raisonnement et ne nécessite aucune valeur ; toute valeur déjà enregistrée dans la configuration est conservée et envoyée.",
			modelReasoningNeedsLevel:
				"Ajoutez au moins un niveau en plus de Désactivé ou désactivez les niveaux de raisonnement.",
			modelReasoningValueRequired:
				"Chaque niveau autre que Off nécessite une valeur API et aucune valeur ne peut être vide.",
			modelReasoningLevelsOnly:
				"Ce protocole d'API n'accepte que les niveaux minimal, low, medium et high, chacun ayant son nom de niveau comme valeur d'API. Modifiez ou supprimez les autres niveaux.",
			modelReasoningAdd: "Ajouter un niveau",
			modelReasoningRemove: "Supprimer le niveau",
			modelReasoningOffValuePlaceholder: "Désactive le raisonnement",
			addModel: "Ajouter un modèle",
			removeModel: "Supprimer le modèle",
			reorderModel: "Réorganiser le modèle",
			reorderModelHelp: "Faites glisser pour réorganiser ou utilisez les touches fléchées haut et bas.",
			modelsEmpty:
				"Aucun modèle ne sera affiché dans le sélecteur. Les identifiants non répertoriés peuvent toujours être envoyés directement.",
			keyBlank: "Saisissez la clé API, ou laissez le champ vide pour conserver celle stockée.",
			keyBlankNew: "Saisissez la clé API ou laissez le champ vide si ce fournisseur s'authentifie d'une autre manière.",
			keyIllegalCharacters: "Cette clé API n'est pas dans un format valide. Veuillez le vérifier.",
			modelIdRequired: "L’ID du modèle est requis.",
			modelIdDuplicate: "L'ID du modèle doit être unique.",
			modelNameInvalid: "Le nom d’affichage ne peut pas être vide.",
			modelContextInvalid: "La fenêtre contextuelle doit être un nombre positif, comme 131072, 256K ou 1M.",
			modelMaxTokensInvalid:
				"Le nombre maximum de jetons de sortie doit être un nombre positif, comme 8192, 64K ou 1M.",
			advancedHint: "D'autres champs se trouvent dans cordis.patch.yml ; modifiez cette section directement.",
			modelCapacityInvalid: "Une capacité doit être un nombre, éventuellement suivi du suffixe K ou M.",
			modelDuplicate: "Chaque ID de modèle peut apparaître une fois.",
			fetchModels: "Récupérer les modèles disponibles",
			fetching: "Demander au fournisseur…",
			fetchNeedsBaseUrl: "Entrez d'abord l'URL de base, puis récupérez-la.",
			fetchEmpty: "Le fournisseur n’a répertorié aucun modèle. Ajoutez-les à la main.",
			fetchTitle: "Choisir des modèles",
			fetchDescription: "Ce sont les modèles disponibles chez ce fournisseur. Les modèles cochés constituent la liste.",
			fetchSearch: "Rechercher des modèles",
			fetchNoMatches: "Aucun modèle correspondant.",
			fetchSelectAll: "Tout sélectionner",
			fetchDeselectAll: "Tout désélectionner",
			fetchAdopt: "Mettre à jour la liste",
			fetchKeepOne: "Gardez au moins un modèle coché.",
			customTag: "Personnalisé",
			customRoute: "Identifiant du fournisseur",
			customRouteHint:
				"Identifiant minuscule, commençant par une lettre, qui nomme de manière unique ce fournisseur dans les demandes et comme nom d'identification.",
			customRouteInvalid:
				"Commencez par une lettre minuscule ; puis des lettres minuscules, des chiffres et des tirets.",
			customRouteTaken: "Un fournisseur utilise déjà cet identifiant.",
			customDisplayName: "Nom d'affichage",
			customApi: "Protocole API",
			customApiUnset: "Non sélectionné",
			protocolOpenAiCompletions: "Achèvements du chat OpenAI",
			protocolOpenAiResponses: "Réponses OpenAI",
			protocolAnthropicMessages: "Messages anthropiques",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "Un fournisseur personnalisé a besoin d'une URL de base.",
			customBaseUrlInvalid: "Saisissez une URL HTTP ou HTTPS valide.",
			customNeedsModels: "Un fournisseur personnalisé a besoin d'au moins un modèle.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "chemin des paramètres insolubles",
			create: "Créer un fournisseur",
			creating: "Création…",
			welcomeTitle: "Avis d'aperçu",
			welcomeBody:
				"DeepSeek Harness 0.2 est toujours en version préliminaire et de nombreux domaines nécessitent une amélioration et un perfectionnement continus. Nous apprécions les commentaires et suggestions de tous les développeurs et utilisateurs. La nouvelle application de bureau cible désormais un large éventail d'utilisateurs, tandis que les fonctionnalités avancées liées aux développeurs peuvent être activées dans les paramètres. Les fonctionnalités du produit et les API de plug-in de DeepSeek Harness devraient poursuivre leurs itérations et leur évolution rapides, et se stabiliseront progressivement au fil du temps. \n\nNous sommes impatients d'explorer les limites de l'intelligence avec les utilisateurs et les développeurs du monde entier, en nous appuyant sur une infrastructure open source, réutilisable et composable. Nous invitons chacun à donner vie à ses idées avec DeepSeek Harness et à participer à la communauté pour enrichir l'écosystème des plugins.",
			welcomeContinue: "Continuer",
			welcomeError: "L'accusé de réception n'a pas pu être enregistré. Veuillez réessayer.",
			onboardingTitle: "Ajoutez une clé API pour commencer",
			onboardingDescription: "Configurez le fournisseur officiel DeepSeek pour commencer la construction.",
			onboardingLater: "Configurer plus tard",
			onboardingSave: "Enregistrer et continuer",
			onboardingSaving: "Sauvegarde…",
			keyRequired: "Entrez une clé API pour continuer."
		};
		const de = {
			nav: "Modelle",
			deepSeekAccount: "DeepSeek-Konto",
			title: "Modelle",
			intro: "Geben Sie Ihre API-Schlüssel ein, um Modelle der folgenden Anbieter zu verwenden.",
			edit: "Bearbeiten",
			editProvider: "Bearbeiten Sie {provider}",
			remove: "Löschen",
			removeProvider: "Löschen Sie {provider}",
			deleteTitle: "{provider} löschen?",
			deleteDescription:
				"Durch das Löschen von {provider} wird seine Konfiguration entfernt. Alle verwendeten Anmeldeinformationen werden an anderer Stelle verwaltet und aufbewahrt.",
			deleteDescriptionWithCredential:
				"Durch das Löschen von {provider} werden seine Konfiguration und der gespeicherte API-Schlüssel entfernt.",
			deleteConfirm: "Löschen Sie {provider}",
			deleting: "{provider} wird gelöscht…",
			add: "Modellanbieter hinzufügen",
			addMode: "So fügen Sie hinzu",
			addCatalog: "Drittanbieter von Modellen",
			addCustom: "Kundenspezifisches Modell API",
			addCatalogHint:
				"Wählen Sie OpenAI, Anthropic, Kimi oder einen anderen Anbieter aus dem integrierten Katalog aus und geben Sie den API-Schlüssel ein.",
			addCustomHint:
				"Verbinden Sie ein Relay, einen selbst gehosteten Server oder einen anderen OpenAI-, Anthropic- oder Gemini-kompatiblen Endpunkt über seine Basis-URL, sein Protokoll und seine Modelle.",
			addCatalogExhausted: "Jeder Kataloganbieter ist bereits konfiguriert.",
			addCustomUnavailable: "Es ist kein API-Protokoll zur Deklaration verfügbar.",
			provider: "Anbieter",
			close: "Schließen",
			cancel: "Abbrechen",
			apply: "Anwenden",
			applying: "Wird angewendet…",
			savedProvider: "Gespeichert {provider}.",
			credentialConfigured: "API-Schlüssel konfiguriert",
			credentialMissing: "API-Schlüssel fehlt",
			accountSignedIn: "Angemeldet",
			readOnly: "Das Einstellungsdokument ist in dieser Bereitstellung schreibgeschützt.",
			loadFailed: "Das Laden des Anbieterverzeichnisses ist fehlgeschlagen",
			conflict:
				"Jemand anderes hat diese Einstellungen geändert, während diese Karte geöffnet war. Schließen Sie es und öffnen Sie es erneut, um die aktuellen Werte zu bearbeiten.",
			retry: "Erneut versuchen",
			keyInput: "API-Schlüssel",
			keyReveal: "Geheimnis zeigen",
			keyHide: "Geheimnis verbergen",
			keyPlaceholder: "Geben Sie Ihren API-Schlüssel ein",
			keyPlaceholderFallback: "Lassen Sie das Feld leer, um env als Authentifizierung zu verwenden ({hint})",
			keySaved: "Der gespeicherte API-Schlüssel wird verwendet.",
			keyReplacePending: "Anwenden, um den gespeicherten API-Schlüssel zu ersetzen.",
			keyRemovePending:
				"Anwenden, um den gespeicherten API-Schlüssel zu löschen und die Umgebungsauthentifizierung zu verwenden.",
			keyRemovePendingEnvironment:
				"Anwenden, um den gespeicherten API-Schlüssel zu löschen. Danach wird die Umgebungsauthentifizierung verwendet ({hint}).",
			keyRemoveApplied:
				"Schlüssel gelöscht. Erneut anwenden, um die Einstellungen abzuschließen; das Löschen ist unwiderruflich.",
			keyFallbackMissing:
				"Umgebungsvariable nicht erkannt. Geben Sie einen API-Schlüssel ein oder konfigurieren Sie {hint} in Ihrer Umgebung.",
			keyFallbackDetected: "Umgebungsvariable erkannt. ({hint})",
			keyFallbackDetectedHidden: "Umgebungsvariable erkannt.",
			keyFallbackUnchecked: "Der Status der Umweltberechtigung wurde nicht bestätigt.",
			keyHelp:
				"Gespeicherte Anmeldeinformationen werden zuerst verwendet. Hier werden Umgebungs-Fallbacks in der Reihenfolge angezeigt: {env}. Quellen sind die Startumgebung, $cwd/.env und dann $DSH_HOME/.env.",
			authHelp: "Authentifizierungsdetails",
			customized: "Benutzerdefinierte Einstellungen",
			baseUrl: "Basis-URL",
			baseUrlDefault: "Kein Standardendpunkt",
			baseUrlEnvironment: "Konfiguration des Anbieterendpunkts: {env}",
			baseUrlConfigured: "Vom Anbieter konfigurierter Endpunkt",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (Standardmäßig wird DEEPSEEK_BASE_URL verwendet)",
			deepSeekEndpointHint: "Verwenden Sie einen API-Endpunkt, der mit Anthropic Messages kompatibel ist.",
			retryPolicy: "Wiederholungsrichtlinie",
			retryModeDefault: "Standard ({mode})",
			retryModeNormal: "Vorübergehende Fehler",
			retryModeAlways: "Alle Fehler",
			retryAlwaysHint:
				"Fehlgeschlagene Anfragen werden wiederholt, bis sie erfolgreich sind oder der Durchlauf gestoppt wird.",
			retryMaxRetries: "Max. Wiederholungen",
			retryCodes: "Fehlercodes",
			retryCodeEmptyResponse: "Leere Antwort",
			retryCodeRateLimit: "Ratenbegrenzung",
			retryCodeServer: "Serverfehler",
			retryCodeTimeout: "Zeitüberschreitung",
			retryCodeTransport: "Netzwerkfehler",
			retryCodeStreamClosed: "Stream vorzeitig beendet",
			retryCodeMalformedResponse: "Fehlerhafte Antwort",
			retryCodeQuota: "Kontingent erschöpft",
			retryCodeCustom: "Benutzerdefinierter Fehlercode",
			retryCodeAdd: "Hinzufügen",
			retryInitialDelay: "Anfangsverzögerung (ms)",
			retryMaxDelay: "Max. Verzögerung (ms)",
			retryJitter: "Jitter-Anteil",
			retryBackoff: "Backoff",
			retryValueNumber: "Geben Sie eine Zahl ein.",
			retryValueInteger: "Geben Sie eine ganze Zahl ein.",
			retryValuePositive: "Muss größer als 0 sein.",
			retryValueMin: "Muss mindestens {min} sein.",
			retryValueMax: "Darf höchstens {max} sein.",
			retryCodesInvalid: "Fehlercodes müssen nicht leerer Text sein.",
			retryCodesDuplicate: "Jeder Fehlercode darf nur einmal vorkommen.",
			retryDelayOrder: "Die anfängliche Verzögerung darf die maximale Verzögerung nicht überschreiten.",
			models: "Modelle",
			modelsInherited: "Verwendung der Adapterstandards",
			modelsCustomized: "Maßgeschneiderter Modellkatalog",
			resetModels: "Standardeinstellungen wiederherstellen",
			model: "Modell",
			modelId: "Modell-ID",
			modelName: "Anzeigename",
			modelNamePlaceholder: "Verwendet die Modell-ID, wenn sie leer ist",
			contextWindow: "Kontextfenster",
			contextWindowPlaceholder: "Verwendet die Standardeinstellung des Anbieters",
			maxTokens: "Maximale Anzahl ausgegebener Token",
			maxTokensPlaceholder: "Verwendet die Standardeinstellung des Anbieters",
			modelAdvanced: "Modelloptionen",
			modelInputTypes: "Eingabetypen",
			modelInputText: "Text",
			modelInputImage: "Bild",
			modelReasoning: "Argumentationsebenen",
			modelReasoningLevel: "Ebene",
			modelReasoningValue: "API-Wert",
			modelReasoningHelp: "Über Argumentationsebenen",
			modelReasoningHelpText:
				"Der API-Wert wird im Feld für den Denkaufwand der Anfrage gesendet, etwa reasoning_effort bei OpenAI. Standardmäßig wird der Stufenname verwendet; gibt die API-Dokumentation des Modellanbieters einen anderen Wert vor, verwenden Sie diesen. Aus deaktiviert das Denken und benötigt keinen Wert; ein bereits konfigurierter Wert bleibt erhalten und wird gesendet.",
			modelReasoningNeedsLevel:
				"Fügen Sie neben „Aus“ mindestens eine Ebene hinzu oder deaktivieren Sie die Argumentationsebenen.",
			modelReasoningValueRequired: "Jede Ebene außer Off benötigt einen API-Wert und kein Wert darf leer sein.",
			modelReasoningLevelsOnly:
				"Dieses API-Protokoll akzeptiert nur die Stufen minimal, low, medium und high, jeweils mit dem Stufennamen als API-Wert. Ändern oder entfernen Sie die anderen Stufen.",
			modelReasoningAdd: "Ebene hinzufügen",
			modelReasoningRemove: "Ebene löschen",
			modelReasoningOffValuePlaceholder: "Schaltet das Denken aus",
			addModel: "Modell hinzufügen",
			removeModel: "Modell löschen",
			reorderModel: "Modell neu anordnen",
			reorderModelHelp:
				"Ziehen Sie, um die Reihenfolge neu anzuordnen, oder verwenden Sie die Aufwärts- und Abwärtspfeiltasten.",
			modelsEmpty:
				"Im Selektor werden keine Modelle angezeigt. Nicht gelistete Ausweise können weiterhin direkt versendet werden.",
			keyBlank:
				"Geben Sie den API-Schlüssel ein oder lassen Sie das Feld leer, um den gespeicherten Schlüssel beizubehalten.",
			keyBlankNew:
				"Geben Sie den API-Schlüssel ein oder lassen Sie das Feld leer, wenn dieser Anbieter auf andere Weise authentifiziert.",
			keyIllegalCharacters: "Dieser API-Schlüssel hat kein gültiges Format. Bitte überprüfen Sie es.",
			modelIdRequired: "Modell-ID ist erforderlich.",
			modelIdDuplicate: "Die Modell-ID muss eindeutig sein.",
			modelNameInvalid: "Der Anzeigename darf nicht leer sein.",
			modelContextInvalid: "Das Kontextfenster muss eine positive Zahl sein, z. B. 131072, 256K oder 1M.",
			modelMaxTokensInvalid:
				"Die maximale Anzahl an Ausgabetokens muss eine positive Zahl sein, z. B. 8192, 64K oder 1M.",
			advancedHint: "Andere Felder befinden sich in cordis.patch.yml; Bearbeiten Sie diesen Abschnitt direkt.",
			modelCapacityInvalid: "Eine Kapazität muss eine Zahl sein, optional mit dem Suffix K oder M.",
			modelDuplicate: "Jede Modell-ID darf einmal vorkommen.",
			fetchModels: "Verfügbare Modelle abrufen",
			fetching: "Den Anbieter fragen...",
			fetchNeedsBaseUrl: "Geben Sie zuerst die Basis-URL ein und rufen Sie sie dann ab.",
			fetchEmpty: "Der Anbieter listete keine Modelle auf. Fügen Sie sie von Hand hinzu.",
			fetchTitle: "Wählen Sie Modelle",
			fetchDescription:
				"Dies sind die Modelle, die dieser Anbieter zur Verfügung hat. Geprüfte Modelle bilden die Liste.",
			fetchSearch: "Modelle suchen",
			fetchNoMatches: "Keine passenden Modelle.",
			fetchSelectAll: "Alles auswählen",
			fetchDeselectAll: "Alle abwählen",
			fetchAdopt: "Liste aktualisieren",
			fetchKeepOne: "Lassen Sie mindestens ein Modell überprüft.",
			customTag: "Benutzerdefiniert",
			customRoute: "Anbieter-ID",
			customRouteHint:
				"Bezeichner in Kleinbuchstaben, beginnend mit einem Buchstaben, der diesen Anbieter in Anfragen und als Anmeldeinformationsname eindeutig benennt.",
			customRouteInvalid: "Beginnen Sie mit einem Kleinbuchstaben; dann Kleinbuchstaben, Ziffern und Bindestriche.",
			customRouteTaken: "Ein Anbieter verwendet diese ID bereits.",
			customDisplayName: "Anzeigename",
			customApi: "API-Protokoll",
			customApiUnset: "Nicht ausgewählt",
			protocolOpenAiCompletions: "OpenAI-Chat-Abschlüsse",
			protocolOpenAiResponses: "OpenAI-Antworten",
			protocolAnthropicMessages: "Anthropische Botschaften",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "Ein benutzerdefinierter Anbieter benötigt eine Basis-URL.",
			customBaseUrlInvalid: "Geben Sie eine gültige HTTP- oder HTTPS-URL ein.",
			customNeedsModels: "Ein benutzerdefinierter Anbieter benötigt mindestens ein Modell.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "Unauflösbarer Einstellungspfad",
			create: "Anbieter erstellen",
			creating: "Erstellen…",
			welcomeTitle: "Vorschauhinweis",
			welcomeBody:
				"DeepSeek Harness 0.2 befindet sich noch in der Vorschau und viele Bereiche müssen weiter verbessert und verfeinert werden. Wir freuen uns über Feedback und Vorschläge aller Entwickler und Benutzer. Die neue Desktop-App richtet sich nun an ein breites Nutzerspektrum, während entwicklerbezogene erweiterte Funktionen in den Einstellungen aktiviert werden können. Es wird erwartet, dass die Produktfunktionen und Plugin-APIs von DeepSeek Harness ihre schnelle Iteration und Weiterentwicklung fortsetzen und sich im Laufe der Zeit allmählich stabilisieren. Wir heißen jeden willkommen, seine Ideen mit DeepSeek Harness zum Leben zu erwecken und sich an der Community zu beteiligen, um das Plugin-Ökosystem zu bereichern.",
			welcomeContinue: "Weiter",
			welcomeError: "Die Bestätigung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
			onboardingTitle: "Fügen Sie einen API-Schlüssel hinzu, um loszulegen",
			onboardingDescription: "Konfigurieren Sie den offiziellen DeepSeek-Anbieter, um mit der Erstellung zu beginnen.",
			onboardingLater: "Später konfigurieren",
			onboardingSave: "Speichern und fortfahren",
			onboardingSaving: "Speichern…",
			keyRequired: "Geben Sie einen API-Schlüssel ein, um fortzufahren."
		};
		const ru = {
			nav: "Модели",
			deepSeekAccount: "DeepSeek Аккаунт",
			title: "Модели",
			intro: "Введите ключи API, чтобы использовать модели следующих поставщиков.",
			edit: "Редактировать",
			editProvider: "Редактировать {provider}",
			remove: "Удалить",
			removeProvider: "Удалить {provider}",
			deleteTitle: "Удалить {provider}?",
			deleteDescription:
				"Удаление {provider} удаляет его конфигурацию. Любые учетные данные, которые он использует, управляются где-то еще и будут сохранены.",
			deleteDescriptionWithCredential: "Удаление {provider} удаляет его конфигурацию и сохраненный ключ API.",
			deleteConfirm: "Удалить {provider}",
			deleting: "Удаление {provider}…",
			add: "Добавить поставщика моделей",
			addMode: "Как добавить",
			addCatalog: "Сторонний поставщик моделей",
			addCustom: "Пользовательская модель API",
			addCatalogHint:
				"Выберите OpenAI, Anthropic, Kimi или другого провайдера из встроенного каталога и введите его ключ API.",
			addCustomHint:
				"Подключите реле, автономный сервер или любую другую конечную точку, совместимую с OpenAI, Anthropic или Gemini, по ее базовому URL-адресу, протоколу и модели.",
			addCatalogExhausted: "Каждый поставщик каталога уже настроен.",
			addCustomUnavailable: "Протокол API недоступен для объявления.",
			provider: "Поставщик",
			close: "Закрыть",
			cancel: "Отмена",
			apply: "Применить",
			applying: "Применение…",
			savedProvider: "Сохранено {provider}.",
			credentialConfigured: "Ключ API настроен",
			credentialMissing: "Ключ API отсутствует",
			accountSignedIn: "Вошёл в систему",
			readOnly: "В этом развертывании документ настроек доступен только для чтения.",
			loadFailed: "Не удалось загрузить каталог поставщика",
			conflict:
				"Кто-то другой изменил эти настройки, пока эта карточка была открыта. Закройте его и откройте снова, чтобы редактировать текущие значения.",
			retry: "Повторить",
			keyInput: "Ключ API",
			keyReveal: "Показать секрет",
			keyHide: "Скрыть секрет",
			keyPlaceholder: "Введите свой ключ API",
			keyPlaceholderFallback: "Оставьте пустым, чтобы использовать env в качестве аутентификации ({hint})",
			keySaved: "Используется сохранённый API-ключ.",
			keyReplacePending: "Примените, чтобы заменить сохранённый API-ключ.",
			keyRemovePending: "Примените, чтобы удалить сохранённый API-ключ и использовать аутентификацию из окружения.",
			keyRemovePendingEnvironment:
				"Примените, чтобы удалить сохранённый API-ключ. Будет использована аутентификация из окружения ({hint}).",
			keyRemoveApplied: "Ключ удалён. Примените ещё раз для завершения настройки; удаление нельзя отменить.",
			keyFallbackMissing: "Переменная Env не обнаружена. Введите ключ API или настройте {hint} в своей среде.",
			keyFallbackDetected: "Обнаружена переменная Env. ({hint})",
			keyFallbackDetectedHidden: "Обнаружена переменная Env.",
			keyFallbackUnchecked: "Статус экологической сертификации не подтвержден.",
			keyHelp:
				"Сохраненные учетные данные используются в первую очередь. Здесь показаны резервные варианты среды в порядке: {env}. Источниками являются среда запуска, $cwd/.env, затем $DSH_HOME/.env.",
			authHelp: "Детали аутентификации",
			customized: "Индивидуальные настройки",
			baseUrl: "Базовый URL",
			baseUrlDefault: "Нет конечной точки по умолчанию",
			baseUrlEnvironment: "Конфигурация конечной точки поставщика: {env}.",
			baseUrlConfigured: "Конечная точка, настроенная поставщиком",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (по умолчанию используется DEEPSEEK_BASE_URL)",
			deepSeekEndpointHint: "Используйте конечную точку API, совместимую с антропными сообщениями.",
			retryPolicy: "Политика повторных попыток",
			retryModeDefault: "По умолчанию ({mode})",
			retryModeNormal: "Временные ошибки",
			retryModeAlways: "Любые ошибки",
			retryAlwaysHint: "Неудачные запросы повторяются до успеха или до остановки хода.",
			retryMaxRetries: "Макс. число повторов",
			retryCodes: "Коды ошибок",
			retryCodeEmptyResponse: "Пустой ответ",
			retryCodeRateLimit: "Лимит запросов",
			retryCodeServer: "Ошибка сервера",
			retryCodeTimeout: "Тайм-аут",
			retryCodeTransport: "Ошибка сети",
			retryCodeStreamClosed: "Поток прерван",
			retryCodeMalformedResponse: "Некорректный ответ",
			retryCodeQuota: "Квота исчерпана",
			retryCodeCustom: "Пользовательский код ошибки",
			retryCodeAdd: "Добавить",
			retryInitialDelay: "Начальная задержка (ms)",
			retryMaxDelay: "Макс. задержка (ms)",
			retryJitter: "Коэффициент джиттера",
			retryBackoff: "Отсрочка",
			retryValueNumber: "Введите число.",
			retryValueInteger: "Введите целое число.",
			retryValuePositive: "Должно быть больше 0.",
			retryValueMin: "Должно быть не меньше {min}.",
			retryValueMax: "Должно быть не больше {max}.",
			retryCodesInvalid: "Коды ошибок должны быть непустым текстом.",
			retryCodesDuplicate: "Каждый код ошибки может встречаться только один раз.",
			retryDelayOrder: "Начальная задержка не может превышать максимальную.",
			models: "Модели",
			modelsInherited: "Использование настроек адаптера по умолчанию",
			modelsCustomized: "Индивидуальный каталог моделей",
			resetModels: "Восстановить настройки по умолчанию",
			model: "Модель",
			modelId: "Идентификатор модели",
			modelName: "Отображаемое имя",
			modelNamePlaceholder: "Использует идентификатор модели, когда он пуст",
			contextWindow: "Контекстное окно",
			contextWindowPlaceholder: "Использует поставщика по умолчанию",
			maxTokens: "Максимальное количество выходных токенов",
			maxTokensPlaceholder: "Использует поставщика по умолчанию",
			modelAdvanced: "Варианты модели",
			modelInputTypes: "Типы ввода",
			modelInputText: "Текст",
			modelInputImage: "Изображение",
			modelReasoning: "Уровни рассуждения",
			modelReasoningLevel: "Уровень",
			modelReasoningValue: "Значение API",
			modelReasoningHelp: "Об уровнях рассуждения",
			modelReasoningHelpText:
				"Значение API передаётся в поле уровня рассуждений запроса, например reasoning_effort у OpenAI. По умолчанию используется название уровня; если документация API поставщика модели указывает другое значение, используйте его. Выкл. отключает рассуждения и не требует значения; уже записанное в конфигурации значение сохраняется и отправляется.",
			modelReasoningNeedsLevel: "Добавьте хотя бы один уровень помимо «Выкл.» или отключите уровни рассуждения.",
			modelReasoningValueRequired:
				"Для каждого уровня, кроме Off, требуется значение API, и ни одно значение не может быть пустым.",
			modelReasoningLevelsOnly:
				"Этот протокол API принимает только уровни minimal, low, medium и high, и значение API у каждого должно совпадать с названием уровня. Измените или удалите остальные уровни.",
			modelReasoningAdd: "Добавить уровень",
			modelReasoningRemove: "Удалить уровень",
			modelReasoningOffValuePlaceholder: "Отключает рассуждения",
			addModel: "Добавить модель",
			removeModel: "Удалить модель",
			reorderModel: "Изменить порядок модели",
			reorderModelHelp: "Перетащите, чтобы изменить порядок, или используйте клавиши со стрелками вверх и вниз.",
			modelsEmpty:
				"В селекторе не будут показаны модели. Неуказанные идентификаторы по-прежнему можно отправлять напрямую.",
			keyBlank: "Введите ключ API или оставьте поле пустым, чтобы сохранить сохраненный.",
			keyBlankNew:
				"Введите ключ API или оставьте поле пустым, если этот провайдер выполняет аутентификацию другим способом.",
			keyIllegalCharacters: "Этот ключ API имеет недопустимый формат. Пожалуйста, проверьте это.",
			modelIdRequired: "Требуется идентификатор модели.",
			modelIdDuplicate: "Идентификатор модели должен быть уникальным.",
			modelNameInvalid: "Отображаемое имя не может быть пустым.",
			modelContextInvalid: "Контекстное окно должно иметь положительное значение, например 131072, 256K или 1M.",
			modelMaxTokensInvalid:
				"Максимальное количество выходных токенов должно иметь положительное значение, например 8192, 64K или 1M.",
			advancedHint: "Остальные поля находятся в файле cordis.patch.yml; отредактируйте этот раздел напрямую.",
			modelCapacityInvalid: "Емкость должна быть числом, возможно с суффиксом K или M.",
			modelDuplicate: "Каждый идентификатор модели может появиться один раз.",
			fetchModels: "Получить доступные модели",
			fetching: "Спросил у провайдера...",
			fetchNeedsBaseUrl: "Сначала введите базовый URL-адрес, а затем извлеките его.",
			fetchEmpty: "Поставщик не указал моделей. Добавьте их вручную.",
			fetchTitle: "Выберите модели",
			fetchDescription: "Это модели, доступные у этого поставщика. Проверенные модели составляют список.",
			fetchSearch: "Поиск моделей",
			fetchNoMatches: "Нет подходящих моделей.",
			fetchSelectAll: "Выбрать все",
			fetchDeselectAll: "Отменить выбор всех",
			fetchAdopt: "Обновить список",
			fetchKeepOne: "Проверьте хотя бы одну модель.",
			customTag: "Пользовательский",
			customRoute: "Идентификатор поставщика",
			customRouteHint:
				"Идентификатор в нижнем регистре, начинающийся с буквы, который уникально называет этого поставщика в запросах и в качестве его учетного имени.",
			customRouteInvalid: "Начните со строчной буквы; затем строчные буквы, цифры и тире.",
			customRouteTaken: "Поставщик уже использует этот идентификатор.",
			customDisplayName: "Отображаемое имя",
			customApi: "Протокол API",
			customApiUnset: "Не выбрано",
			protocolOpenAiCompletions: "Завершения чата OpenAI",
			protocolOpenAiResponses: "Ответы OpenAI",
			protocolAnthropicMessages: "Антропные сообщения",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "Пользовательскому поставщику нужен базовый URL-адрес.",
			customBaseUrlInvalid: "Введите действительный URL-адрес HTTP или HTTPS.",
			customNeedsModels: "Пользовательскому поставщику нужна хотя бы одна модель.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "неразрешимый путь настроек",
			create: "Создать поставщика",
			creating: "Создание…",
			welcomeTitle: "Уведомление о предварительном просмотре",
			welcomeBody:
				"DeepSeek Harness 0.2 все еще находится в предварительной версии, и многие области нуждаются в дальнейшем улучшении и доработке. Мы приветствуем отзывы и предложения от всех разработчиков и пользователей. Новое настольное приложение теперь ориентировано на широкий круг пользователей, а расширенные функции, связанные с разработчиком, можно включить в настройках. Ожидается, что функции продукта DeepSeek Harness и API-интерфейсы плагинов будут продолжать быстро меняться и развиваться и со временем будут постепенно стабилизироваться. \n\nМы надеемся изучить пределы интеллекта вместе с пользователями и разработчиками по всему миру, опираясь на многоразовую и компонуемую инфраструктуру с открытым исходным кодом. Мы приглашаем всех воплотить свои идеи в жизнь с помощью DeepSeek Harness и принять участие в сообществе, чтобы обогатить экосистему плагинов.",
			welcomeContinue: "Продолжить",
			welcomeError: "Не удалось сохранить подтверждение. Пожалуйста, попробуйте еще раз.",
			onboardingTitle: "Добавьте ключ API, чтобы начать работу.",
			onboardingDescription: "Настройте официального поставщика DeepSeek, чтобы начать сборку.",
			onboardingLater: "Настроить позже",
			onboardingSave: "Сохранить и продолжить",
			onboardingSaving: "Сохранение…",
			keyRequired: "Введите ключ API, чтобы продолжить."
		};
		const pt = {
			nav: "Modelos",
			deepSeekAccount: "DeepSeek Conta",
			title: "Modelos",
			intro: "Insira suas chaves API para usar modelos dos seguintes fornecedores.",
			edit: "Editar",
			editProvider: "Editar {provider}",
			remove: "Excluir",
			removeProvider: "Excluir {provider}",
			deleteTitle: "Excluir {provider}?",
			deleteDescription:
				"Excluir {provider} remove sua configuração. Qualquer credencial usada é gerenciada em outro lugar e será mantida.",
			deleteDescriptionWithCredential: "A exclusão de {provider} remove sua configuração e a chave API armazenada.",
			deleteConfirm: "Excluir {provider}",
			deleting: "Excluindo {provider}…",
			add: "Adicionar provedor de modelo",
			addMode: "Como adicionar",
			addCatalog: "Provedor de modelo terceirizado",
			addCustom: "Modelo personalizado API",
			addCatalogHint: "Escolha OpenAI, Anthropic, Kimi ou outro provedor no catálogo integrado e insira sua chave API.",
			addCustomHint:
				"Conecte um retransmissor, um servidor auto-hospedado ou qualquer outro endpoint compatível com OpenAI, Anthropic ou Gemini por meio de URL, protocolo e modelos básicos.",
			addCatalogExhausted: "Cada provedor de catálogo já está configurado.",
			addCustomUnavailable: "Nenhum protocolo API está disponível para declaração.",
			provider: "Provedor",
			close: "Fechar",
			cancel: "Cancelar",
			apply: "Aplicar",
			applying: "Aplicando…",
			savedProvider: "Salvo {provider}.",
			credentialConfigured: "API chave configurada",
			credentialMissing: "API chave faltando",
			accountSignedIn: "Conectado",
			readOnly: "O documento de configurações é somente leitura nesta implantação.",
			loadFailed: "Falha ao carregar o diretório do provedor",
			conflict:
				"Outra pessoa alterou essas configurações enquanto este cartão estava aberto. Feche-o e abra-o novamente para editar os valores atuais.",
			retry: "Tentar novamente",
			keyInput: "API chave",
			keyReveal: "Mostrar segredo",
			keyHide: "Ocultar segredo",
			keyPlaceholder: "Insira sua chave API",
			keyPlaceholderFallback: "Deixe em branco para usar env como autenticação ({hint})",
			keySaved: "A chave API salva será usada.",
			keyReplacePending: "Aplique para substituir a chave API salva.",
			keyRemovePending: "Aplique para limpar a chave API salva e usar a autenticação do ambiente.",
			keyRemovePendingEnvironment:
				"Aplique para limpar a chave API salva. A autenticação do ambiente será usada ({hint}).",
			keyRemoveApplied:
				"Chave apagada. Aplique novamente para concluir as configurações; a exclusão não pode ser desfeita.",
			keyFallbackMissing: "Env var não detectado. Insira uma chave API ou configure {hint} em seu ambiente.",
			keyFallbackDetected: "Variável de ambiente detectada. ({hint})",
			keyFallbackDetectedHidden: "Variável de ambiente detectada.",
			keyFallbackUnchecked: "O status da credencial ambiental não foi confirmado.",
			keyHelp:
				"As credenciais salvas são usadas primeiro. Fallbacks de ambiente mostrados aqui, em ordem: {env}. As fontes são o ambiente de inicialização, $cwd/.env e, em seguida, $DSH_HOME/.env.",
			authHelp: "Detalhes de autenticação",
			customized: "Configurações personalizadas",
			baseUrl: "URL base",
			baseUrlDefault: "Nenhum endpoint padrão",
			baseUrlEnvironment: "Configuração do endpoint do provedor: {env}",
			baseUrlConfigured: "Endpoint configurado pelo provedor",
			baseUrlPlaceholder: "{url}",
			deepSeekBaseUrl: "https://api.deepseek.com/anthropic (padrão para usar DEEPSEEK_BASE_URL)",
			deepSeekEndpointHint: "Use um endpoint API compatível com Anthropic Messages.",
			retryPolicy: "Política de novas tentativas",
			retryModeDefault: "Padrão ({mode})",
			retryModeNormal: "Erros transitórios",
			retryModeAlways: "Todos os erros",
			retryAlwaysHint: "As solicitações com falha são repetidas até terem sucesso ou até o turno ser interrompido.",
			retryMaxRetries: "Máx. de novas tentativas",
			retryCodes: "Códigos de erro",
			retryCodeEmptyResponse: "Resposta vazia",
			retryCodeRateLimit: "Limite de taxa",
			retryCodeServer: "Erro do servidor",
			retryCodeTimeout: "Tempo esgotado",
			retryCodeTransport: "Erro de rede",
			retryCodeStreamClosed: "Fluxo encerrado cedo",
			retryCodeMalformedResponse: "Resposta malformada",
			retryCodeQuota: "Cota esgotada",
			retryCodeCustom: "Código de erro personalizado",
			retryCodeAdd: "Adicionar",
			retryInitialDelay: "Atraso inicial (ms)",
			retryMaxDelay: "Atraso máximo (ms)",
			retryJitter: "Proporção de jitter",
			retryBackoff: "Backoff",
			retryValueNumber: "Insira um número.",
			retryValueInteger: "Insira um número inteiro.",
			retryValuePositive: "Deve ser maior que 0.",
			retryValueMin: "Deve ser no mínimo {min}.",
			retryValueMax: "Deve ser no máximo {max}.",
			retryCodesInvalid: "Os códigos de erro devem ser texto não vazio.",
			retryCodesDuplicate: "Cada código de erro só pode aparecer uma vez.",
			retryDelayOrder: "O atraso inicial não pode exceder o atraso máximo.",
			models: "Modelos",
			modelsInherited: "Usando os padrões do adaptador",
			modelsCustomized: "Catálogo de modelos personalizados",
			resetModels: "Restaurar padrões",
			model: "Modelo",
			modelId: "ID do modelo",
			modelName: "Nome de exibição",
			modelNamePlaceholder: "Usa o ID do modelo quando vazio",
			contextWindow: "Janela de contexto",
			contextWindowPlaceholder: "Usa o padrão do provedor",
			maxTokens: "Máximo de tokens de saída",
			maxTokensPlaceholder: "Usa o padrão do provedor",
			modelAdvanced: "Opções de modelo",
			modelInputTypes: "Tipos de entrada",
			modelInputText: "Texto",
			modelInputImage: "Imagem",
			modelReasoning: "Níveis de raciocínio",
			modelReasoningLevel: "Nível",
			modelReasoningValue: "valor API",
			modelReasoningHelp: "Sobre níveis de raciocínio",
			modelReasoningHelpText:
				"O valor da API é enviado no campo de esforço de raciocínio da solicitação, como reasoning_effort da OpenAI. Por padrão, usa-se o nome do nível; se a documentação da API do provedor do modelo especificar outro valor, use-o. Desativado desliga o raciocínio e não exige valor; qualquer valor já salvo na configuração é mantido e enviado.",
			modelReasoningNeedsLevel: "Adicione pelo menos um nível além de Desativado ou desative os níveis de raciocínio.",
			modelReasoningValueRequired:
				"Cada nível além de Desligado precisa de um valor API e nenhum valor pode ficar vazio.",
			modelReasoningLevelsOnly:
				"Este protocolo de API aceita apenas os níveis minimal, low, medium e high, cada um com o nome do nível como valor da API. Altere ou remova os outros níveis.",
			modelReasoningAdd: "Adicionar nível",
			modelReasoningRemove: "Excluir nível",
			modelReasoningOffValuePlaceholder: "Desativa o raciocínio",
			addModel: "Adicionar modelo",
			removeModel: "Excluir modelo",
			reorderModel: "Reordenar modelo",
			reorderModelHelp: "Arraste para reordenar ou use as teclas de seta para cima e para baixo.",
			modelsEmpty: "Nenhum modelo será mostrado no seletor. IDs não listados ainda podem ser enviados diretamente.",
			keyBlank: "Insira a chave API ou deixe o campo vazio para manter a chave armazenada.",
			keyBlankNew: "Insira a chave API ou deixe o campo vazio se este provedor autenticar de outra forma.",
			keyIllegalCharacters: "Esta chave API não está em um formato válido. Por favor, verifique.",
			modelIdRequired: "O ID do modelo é obrigatório.",
			modelIdDuplicate: "O ID do modelo deve ser exclusivo.",
			modelNameInvalid: "O nome de exibição não pode ficar vazio.",
			modelContextInvalid: "A janela de contexto deve ter uma contagem positiva, como 131072, 256K ou 1M.",
			modelMaxTokensInvalid: "Os tokens de saída máximos devem ter uma contagem positiva, como 8192, 64K ou 1M.",
			advancedHint: "Outros campos residem em cordis.patch.yml; edite essa seção diretamente.",
			modelCapacityInvalid: "Uma capacidade deve ser um número, opcionalmente com o sufixo K ou M.",
			modelDuplicate: "Cada ID de modelo pode aparecer uma vez.",
			fetchModels: "Buscar modelos disponíveis",
			fetching: "Perguntando ao provedor…",
			fetchNeedsBaseUrl: "Insira o URL base primeiro e depois busque.",
			fetchEmpty: "O fornecedor não listou nenhum modelo. Adicione-os manualmente.",
			fetchTitle: "Escolha modelos",
			fetchDescription:
				"Estes são os modelos que este fornecedor tem disponíveis. Os modelos verificados compõem a lista.",
			fetchSearch: "Pesquisar modelos",
			fetchNoMatches: "Não há modelos correspondentes.",
			fetchSelectAll: "Selecionar tudo",
			fetchDeselectAll: "Desmarcar tudo",
			fetchAdopt: "Lista de atualização",
			fetchKeepOne: "Mantenha pelo menos um modelo verificado.",
			customTag: "Personalizado",
			customRoute: "ID do provedor",
			customRouteHint:
				"Identificador minúsculo, começando com uma letra, que nomeia exclusivamente esse provedor nas solicitações e como seu nome de credencial.",
			customRouteInvalid: "Comece com uma letra minúscula; em seguida, letras minúsculas, dígitos e travessões.",
			customRouteTaken: "Um provedor já usa esse ID.",
			customDisplayName: "Nome de exibição",
			customApi: "API protocolo",
			customApiUnset: "Não selecionado",
			protocolOpenAiCompletions: "Conclusões do bate-papo OpenAI",
			protocolOpenAiResponses: "Respostas OpenAI",
			protocolAnthropicMessages: "Mensagens Antrópicas",
			protocolGemini: "Gemini API",
			customNeedsBaseUrl: "Um provedor personalizado precisa de um URL base.",
			customBaseUrlInvalid: "Insira um URL HTTP ou HTTPS válido.",
			customNeedsModels: "Um provedor personalizado precisa de pelo menos um modelo.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			customAnthropicBaseUrlPlaceholder: "https://gateway.example",
			customGeminiBaseUrlPlaceholder: "https://gateway.example/v1beta",
			settingsPathUnresolvable: "caminho de configurações insolúveis",
			create: "Criar provedor",
			creating: "Criando…",
			welcomeTitle: "Aviso de visualização",
			welcomeBody:
				"DeepSeek Harness 0.2 ainda está em versão prévia e muitas áreas precisam de melhorias e refinamentos contínuos. Agradecemos comentários e sugestões de todos os desenvolvedores e usuários. O novo aplicativo de desktop agora é direcionado a uma ampla gama de usuários, enquanto recursos avançados relacionados ao desenvolvedor podem ser habilitados nas configurações. Espera-se que os recursos do produto e as APIs de plug-in do DeepSeek Harness continuem com rápida iteração e evolução e se estabilizem gradualmente ao longo do tempo.\n\nEsperamos explorar os limites da inteligência junto com usuários e desenvolvedores em todo o mundo, desenvolvendo uma infraestrutura de código aberto, reutilizável e combinável. Convidamos todos a dar vida às suas ideias com DeepSeek Harness e participar da comunidade para enriquecer o ecossistema de plug-ins.",
			welcomeContinue: "Continuar",
			welcomeError: "A confirmação não pôde ser salva. Por favor, tente novamente.",
			onboardingTitle: "Adicione uma chave API para começar",
			onboardingDescription: "Configure o provedor DeepSeek oficial para começar a compilar.",
			onboardingLater: "Configurar mais tarde",
			onboardingSave: "Salvar e continuar",
			onboardingSaving: "Salvando…",
			keyRequired: "Insira uma chave de API para continuar."
		};
		const NS = "settings.models";
		const ABSENT_CREDENTIAL_ONBOARDING = true;
		function refreshIfLoaded(controller) {
			if (controller.store.getSnapshot().status === "idle") return;
			controller.load();
		}
		const inject = [
			"slots",
			"locale",
			"remote",
			"remote.credentials",
			"remote.llm",
			"remote.settings",
			"remote.session",
			"configForms",
			"settingsSchema"
		];
		function apply(ctx, config) {
			const nativeShell = "dshDesktop" in globalThis;
			const automatic = {
				getSnapshot: () => !nativeShell && (config.credentialOnboarding.get() ?? ABSENT_CREDENTIAL_ONBOARDING),
				subscribe: (listener) => config.credentialOnboarding.subscribe(listener)
			};
			ctx.effect(
				() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }),
				"ui-settings-models: copy dictionaries"
			);
			const schema = createSettingsSchemaOperations(ctx.settingsSchema);
			const operations = createModelsOperations(ctx);
			const controller = new ModelsSettingsStore(ctx, schema, ctx.configForms.describe());
			const t = ctx.locale.bind(NS);
			const injected = () => ({ controller, hooks: { snapshot: controller.store }, operations, schema, t });
			const deepSeekOnboardingInjected = () => ({
				track: (name, attributes) => ctx.get("productAnalytics")?.track(name, attributes),
				controller,
				hooks: { models: controller.store, automatic },
				operations,
				schema,
				t
			});
			const welcomeController = new WelcomeNoticeStore(ctx.configForms.get(WELCOME_NOTICE_SETTINGS_NAMESPACE));
			const welcomeInjected = () => ({ controller: welcomeController, hooks: { welcome: welcomeController.store }, t });
			ctx.effect(() => {
				const refreshModels = () => {
					refreshIfLoaded(controller);
				};
				const disposers = [
					ctx.remote.$on("settings/document-updated", () => {
						refreshModels();
					}),
					ctx.remote.$on("credentials/record-updated", refreshModels),
					ctx.remote.$on("credentials/reference-updated", refreshModels),
					ctx.remote.$on("credentials/updated", refreshModels),
					ctx.remote.$on("llm/adapters-updated", refreshModels),
					ctx.on("connection/reset", refreshModels)
				];
				return () => {
					welcomeController.dispose();
					for (const dispose of disposers) dispose();
				};
			}, "ui-settings-models: pushed invalidations");
			ctx.slots.inject("settings.section", () =>
				ctx.slots.register(
					{
						name: "settings.section",
						id: "models",
						order: 10,
						label: () => t("nav"),
						inject: injected,
						children: {
							"settings.models.provider-card": { kind: "keyed", scope: "root" },
							"settings.models.footer": { kind: "list", scope: "root" }
						}
					},
					ModelsSection
				)
			);
			if (!nativeShell)
				ctx.slots.inject("settings.onboarding", () =>
					ctx.slots.register(
						{ name: "settings.onboarding", id: "welcome-notice", order: -100, inject: welcomeInjected },
						WelcomeNotice
					)
				);
			ctx.slots.inject("settings.onboarding", () =>
				ctx.slots.register(
					{
						name: "settings.onboarding",
						id: "deepseek-official",
						children: { "settings.models.sign-in": { kind: "single", scope: "root" } },
						order: 0,
						inject: deepSeekOnboardingInjected
					},
					DeepSeekOnboardingDialog
				)
			);
		}
		exports.apply = apply;
		exports.inject = inject;
		exports.refreshIfLoaded = refreshIfLoaded;
		return module.exports;
	},
	meta: () => ({
		stylesheets: {
			"src/client/ModelsSection.module.css": {
				text: (context) =>
					".zGbnIq_section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:24px;display:flex}.zGbnIq_title{color:var(--dsw-alias-label-primary);margin:0;font-size:16px;font-weight:500;line-height:24px}.zGbnIq_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:14px;line-height:22px}.zGbnIq_notice{color:var(--dsw-alias-state-warn-label);margin:0;font-size:12px;line-height:18px}.zGbnIq_savedNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}.zGbnIq_rows{flex-direction:column;gap:12px;margin:0;padding:0;list-style:none;display:flex}.zGbnIq_rowCard{border:.5px solid var(--dsw-alias-settings-card-stroke);background:var(--dsw-alias-settings-card-fill);border-radius:var(--dsw-radius-xl);flex-direction:column;gap:16px;padding:12px 14px;display:flex}.zGbnIq_rowHead{align-items:center;gap:10px;display:flex}.zGbnIq_rowIdentity{align-items:center;gap:6px;min-width:0;display:inline-flex}.zGbnIq_rowName{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.zGbnIq_rowTag{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-xs);color:var(--dsw-alias-label-secondary);flex:none;padding:1px 6px;font-size:11px;line-height:16px}.zGbnIq_credentialDot{box-sizing:border-box;corner-shape:round;border-radius:50%;flex:none;width:8px;height:8px;display:inline-block}.zGbnIq_credentialDotConfigured{background:var(--dsw-alias-state-success-primary)}.zGbnIq_credentialDotMissing{background:var(--dsw-alias-state-error-primary)}.zGbnIq_accountStatus{color:var(--dsw-alias-state-success-primary);flex:none;align-items:center;gap:6px;font-size:13px;line-height:20px;display:inline-flex}.zGbnIq_rowActions{align-items:center;gap:4px;margin-left:auto;display:inline-flex}.zGbnIq_primaryButton,.zGbnIq_secondaryButton,.zGbnIq_addButton{box-sizing:border-box;border-radius:var(--dsw-radius-md);height:36px;font:inherit;cursor:pointer;border:none;justify-content:center;align-items:center;gap:4px;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.zGbnIq_primaryButton{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}@media (hover:hover){.zGbnIq_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}}.zGbnIq_secondaryButton,.zGbnIq_addButton{border:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary);background:0 0}@media (hover:hover){.zGbnIq_secondaryButton:hover:not(:disabled),.zGbnIq_addButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.zGbnIq_secondaryButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}}.zGbnIq_dangerButton{box-sizing:border-box;border-radius:var(--dsw-radius-md);height:36px;color:var(--dsw-alias-state-error-primary);font:inherit;cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}@media (hover:hover){.zGbnIq_dangerButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}}.zGbnIq_rowActions .zGbnIq_secondaryButton,.zGbnIq_rowActions .zGbnIq_dangerButton{border-radius:var(--dsw-radius-sm);height:28px;padding:0 10px;font-size:12px;line-height:18px}.zGbnIq_primaryButton:disabled,.zGbnIq_secondaryButton:disabled,.zGbnIq_dangerButton:disabled,.zGbnIq_addButton:disabled,.zGbnIq_linkButton:disabled,.zGbnIq_addModelButton:disabled{opacity:.4;cursor:default}.zGbnIq_primaryButton:focus-visible,.zGbnIq_secondaryButton:focus-visible,.zGbnIq_dangerButton:focus-visible,.zGbnIq_addButton:focus-visible,.zGbnIq_linkButton:focus-visible,.zGbnIq_addModelButton:focus-visible,.zGbnIq_iconButton:focus-visible,.zGbnIq_customizedSummary:focus-visible{box-shadow:0 0 0 2px var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline:none}.zGbnIq_editor{border-radius:var(--dsw-radius-lg);background:var(--dsw-alias-bg-module-platform);flex-direction:column;gap:14px;padding:14px 16px;display:flex}.zGbnIq_editorHeader{align-items:baseline;gap:8px;display:flex}.zGbnIq_editorTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.zGbnIq_editorRoute{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.zGbnIq_field{flex-direction:column;gap:6px;display:flex}.zGbnIq_fieldLabel{color:var(--dsw-alias-label-secondary);align-items:center;gap:10px;font-size:12px;font-weight:500;line-height:18px;display:inline-flex}.zGbnIq_helpButton{border:.5px solid var(--dsw-alias-border-l3);corner-shape:round;width:16px;height:16px;color:var(--dsw-alias-label-tertiary);font:inherit;text-align:center;cursor:help;background:0 0;border-radius:50%;padding:0;font-size:11px;line-height:15px}.zGbnIq_helpButton:focus-visible{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-tertiary)}@media (hover:hover){.zGbnIq_helpButton:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-tertiary)}}.zGbnIq_linkButton{box-sizing:border-box;border-radius:var(--dsw-radius-sm);height:28px;color:var(--dsw-alias-label-tertiary);font:inherit;cursor:pointer;background:0 0;border:none;align-items:center;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}@media (hover:hover){.zGbnIq_linkButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}}.zGbnIq_advancedHint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.zGbnIq_editorActions{justify-content:flex-end;gap:8px;display:flex}.zGbnIq_addBlock>.zGbnIq_editorActions{margin-top:12px}.zGbnIq_addBlock{flex-direction:column;gap:12px;display:flex}.zGbnIq_addActions{display:flex}.zGbnIq_addButton{border:1px dashed var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-lg);flex:1 1 0;gap:6px;min-width:180px;height:44px}.zGbnIq_addModes{flex-direction:column;align-items:flex-start;gap:8px;display:flex}.zGbnIq_addPanel{flex-direction:column;gap:14px;display:flex}.zGbnIq_addPanel[hidden]{display:none}.zGbnIq_addCard,.zGbnIq_setupCard{border-radius:var(--dsw-radius-lg);background:var(--dsw-alias-bg-module-platform);flex-direction:column;gap:14px;padding:14px 16px;list-style:none;display:flex}.zGbnIq_addCard .zGbnIq_editor,.zGbnIq_setupCard .zGbnIq_editor{background:0 0;padding:0}.zGbnIq_customized{border-top:.5px solid var(--dsw-alias-border-l2);padding-top:10px}.zGbnIq_customizedSummary{border-radius:var(--dsw-radius-sm);cursor:pointer;width:fit-content;color:var(--dsw-alias-label-secondary);align-items:center;gap:6px;margin-left:-4px;padding:2px 4px;font-size:12px;font-weight:500;line-height:18px;list-style:none;display:flex}.zGbnIq_customizedSummary::-webkit-details-marker{display:none}.zGbnIq_customizedSummary:before{content:\"\";border-bottom:1.5px solid;border-right:1.5px solid;width:5px;height:5px;transition:transform .12s;transform:rotate(-45deg)translate(-1px,-1px)}.zGbnIq_customized[open]>.zGbnIq_customizedSummary:before,.zGbnIq_retryFold[open]>.zGbnIq_customizedSummary:before{transform:rotate(45deg)translate(-1px,-1px)}.zGbnIq_retryFold>.zGbnIq_customizedSummary{color:var(--dsw-alias-label-tertiary);font-weight:400}@media (hover:hover){.zGbnIq_customizedSummary:hover{color:var(--dsw-alias-label-primary)}}.zGbnIq_customizedBody{flex-direction:column;gap:12px;padding-top:12px;display:flex}.zGbnIq_modelCatalog{border-top:.5px solid var(--dsw-alias-border-l2);flex-direction:column;gap:12px;padding-top:16px;display:flex;position:relative}.zGbnIq_modelCatalogHeading{flex-direction:column;gap:2px;display:flex}.zGbnIq_modelCatalogTitle{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}.zGbnIq_modelCatalogMeta,.zGbnIq_modelEmpty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.zGbnIq_modelList{--model-row-gap:12px;gap:var(--model-row-gap);flex-direction:column;display:flex;container-type:inline-size}.zGbnIq_modelListHead{justify-content:space-between;align-items:flex-start;gap:12px;display:flex}.zGbnIq_modelEntry{border:.5px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-lg);grid-template-columns:28px minmax(0,1.4fr) minmax(0,1fr) 28px 28px;column-gap:6px;padding:6px;display:grid;position:relative;container:zGbnIq_model-row/inline-size}.zGbnIq_modelRow{grid-column:1/-1;grid-template-columns:subgrid;align-items:center;gap:6px;display:grid}.zGbnIq_modelName{grid-area:1/3}.zGbnIq_modelNameLabel{display:none}@container zGbnIq_model-row (width<=440px){.zGbnIq_modelRow>.zGbnIq_modelAdvanced{grid-column:1/-1;grid-template-columns:repeat(2,minmax(0,1fr))}.zGbnIq_modelRow{grid-template-columns:auto minmax(0,1fr) auto auto}.zGbnIq_modelRow .zGbnIq_modelName{grid-area:2/1/auto/-1;padding:2px 4px 0;display:none}.zGbnIq_modelRow[data-expanded] .zGbnIq_modelName{display:flex}.zGbnIq_modelNameLabel{display:block}}.zGbnIq_modelDragHandle:not(:disabled){cursor:grab}.zGbnIq_modelEntry[data-dragging]{opacity:.5}.zGbnIq_modelEntry[data-drop-target]{z-index:1}.zGbnIq_modelDragPreview{background:var(--dsw-alias-bg-module-platform)}.zGbnIq_modelEntry:before,.zGbnIq_modelEntry:after{content:\"\";z-index:1;height:calc(var(--model-row-gap) / 2 + 1px);position:absolute;left:0;right:0}.zGbnIq_modelEntry:before{top:calc(-1 * (var(--model-row-gap) / 2 + 1px))}.zGbnIq_modelEntry:after{bottom:calc(-1 * (var(--model-row-gap) / 2 + 1px))}.zGbnIq_modelEntry[data-drop-target=before]:before,.zGbnIq_modelEntry[data-drop-target=after]:after{background:linear-gradient(55deg, transparent calc(50% - 1px), var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat, linear-gradient(125deg, transparent calc(50% - 1px), var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat, linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;height:12px}.zGbnIq_modelEntry[data-drop-target=before]:before{top:calc(-1 * (var(--model-row-gap) / 2 + 6px))}.zGbnIq_modelEntry[data-drop-target=after]:after{bottom:calc(-1 * (var(--model-row-gap) / 2 + 6px))}.zGbnIq_iconButton{box-sizing:border-box;border-radius:var(--dsw-radius-sm);width:28px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;display:inline-flex}@media (hover:hover){.zGbnIq_iconButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}}.zGbnIq_iconButton:disabled{cursor:default;opacity:.4}@media (hover:hover){.zGbnIq_iconButtonDanger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary)}}.zGbnIq_modelAdvanced{grid-column:2/4;grid-template-columns:subgrid;row-gap:16px;padding:16px 0 6px;display:grid}.zGbnIq_retryBody{flex-direction:column;gap:12px;margin-top:4px;display:flex}.zGbnIq_retryCodeChoices{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px 16px;display:grid}.zGbnIq_retryCodeAdd{gap:8px;margin-top:8px;display:flex}.zGbnIq_retryCount{width:max(112px,33.3333% - 5.33333px);max-width:100%}.zGbnIq_retryBackoff{grid-template-columns:repeat(auto-fit,minmax(112px,1fr));align-items:end;gap:12px 8px;padding-top:8px;display:grid}.zGbnIq_modelField{flex-direction:column;gap:6px;min-width:0;display:flex}.zGbnIq_modelInputTypes{border:none;grid-column:1/-1;min-width:0;margin:0;padding:0}.zGbnIq_modelInputTypes legend{margin-bottom:6px;padding:0}.zGbnIq_modelInputChoices{flex-wrap:wrap;align-items:center;gap:16px;min-height:32px;display:flex}.zGbnIq_modelFieldLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.zGbnIq_modelReasoning{flex-direction:column;grid-column:1/-1;gap:6px;min-width:0;display:flex}.zGbnIq_modelReasoningLabel{align-items:center;gap:6px;display:inline-flex}.zGbnIq_modelReasoningHead{justify-content:space-between;align-items:center;gap:8px;display:flex}.zGbnIq_modelReasoningRow{grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto;align-items:center;gap:6px;display:grid}.zGbnIq_modelReasoningRow .zGbnIq_selectInput{max-width:none}.zGbnIq_modelReasoningValueInput{font-family:var(--ds-font-family-code);font-size:13px}.zGbnIq_modelEmpty{border:1px dashed var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-lg);text-align:center;padding:12px}.zGbnIq_addModelButton{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-md);height:32px;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;align-self:flex-start;align-items:center;gap:6px;margin-top:4px;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}@media (hover:hover){.zGbnIq_addModelButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}}.zGbnIq_input{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-md);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);padding:0 10px;font-size:14px;line-height:22px}select.zGbnIq_input{cursor:pointer;max-width:240px}.zGbnIq_input:focus{border-color:var(--dsw-alias-state-business-primary);outline:none}.zGbnIq_input::placeholder{color:var(--dsw-alias-label-tertiary)}.zGbnIq_input:disabled{opacity:.6;cursor:default}.zGbnIq_keyInput{position:relative}.zGbnIq_savedKeyInput .zGbnIq_input::placeholder{color:var(--dsw-alias-label-primary);opacity:1}.zGbnIq_keyInputFilled{padding-right:40px}.zGbnIq_keyToggle{border-radius:var(--dsw-radius-md);width:32px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;display:inline-flex;position:absolute;inset:1px 1px 1px auto}@media (hover:hover){.zGbnIq_keyToggle:hover:not(:disabled){color:var(--dsw-alias-label-primary)}}.zGbnIq_keyToggle:focus-visible{outline:var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}.zGbnIq_keyToggle:disabled{opacity:.6;cursor:default}.zGbnIq_selectInput{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 12px center;background-repeat:no-repeat;background-size:12px 12px;padding-right:32px}.zGbnIq_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.zGbnIq_deleteDialog{width:min(480px,100%)}.zGbnIq_deleteConfirm:not(:disabled){--dsh-button-outline-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}@media (hover:hover){.zGbnIq_deleteConfirm:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}}.zGbnIq_hiddenLabel{clip:rect(0 0 0 0);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}@media (prefers-reduced-motion:reduce){.zGbnIq_customizedSummary:before,.zGbnIq_switchThumb{transition:none}}.zGbnIq_fetchDialog{--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);max-width:520px}.zGbnIq_candidateToolbar{align-items:center;gap:8px;margin-bottom:6px;display:flex}.zGbnIq_candidateSearch{flex:240px;min-width:0}.zGbnIq_candidateList{flex-direction:column;gap:2px;max-height:320px;margin:0;padding:0;list-style:none;display:flex;overflow-y:auto}.zGbnIq_candidate{border-radius:var(--dsw-radius-md)}.zGbnIq_candidateLabel{cursor:pointer;align-items:center;gap:8px;padding:6px 8px;display:flex}.zGbnIq_candidateId{min-width:0;font-family:var(--ds-font-family-code);text-overflow:ellipsis;white-space:nowrap;flex:auto;font-size:13px;overflow:hidden}.zGbnIq_candidateEmpty{color:var(--dsw-alias-label-secondary);text-align:center;margin:24px 0;font-size:13px;line-height:20px}.zGbnIq_sectionHeader{flex-direction:column;gap:4px;display:flex}@media (pointer:coarse){.zGbnIq_input{font-size:16px}}"
			},
			"src/client/OnboardingModal.module.css": {
				text: (context) =>
					".jLrgrW_dialog{width:min(600px,100%);max-height:100%;padding:0}.jLrgrW_content{box-sizing:border-box;flex-direction:column;min-height:0;padding:28px;display:flex;overflow-y:auto}.jLrgrW_title{color:var(--dsw-alias-label-primary);outline:none;margin:0;font-size:20px;font-weight:500;line-height:28px}.jLrgrW_body{margin-top:8px}@media (width<=560px){.jLrgrW_content{padding:24px}}"
			},
			"src/client/DeepSeekOnboardingDialog.module.css": {
				text: (context) =>
					".GL8Viq_description{color:var(--dsw-alias-label-secondary);margin:0;font-size:14px;line-height:24px}.GL8Viq_editor{margin-top:24px}@media (width<=560px){.GL8Viq_editor{margin-top:20px}}"
			},
			"src/client/WelcomeNotice.module.css": {
				text: (context) =>
					".t1T8VW_copy{color:var(--dsw-alias-label-secondary);font-size:14px;line-height:24px}.t1T8VW_copy p{margin:0}.t1T8VW_copy p+p{margin-top:12px}.t1T8VW_error{color:var(--dsw-alias-state-error-primary);margin:16px 0 0;font-size:14px;line-height:22px}.t1T8VW_actions{justify-content:flex-end;margin-top:24px;display:flex}.t1T8VW_primary{min-width:120px}@media (width<=560px){.t1T8VW_primary{width:100%}}"
			}
		}
	})
});
//# sourceMappingURL=client.js.map
